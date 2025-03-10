"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import authtokenupdatestatus_enum as shared_authtokenupdatestatus_enum
from ..shared import pendingautomaticfailoverstatus_enum as shared_pendingautomaticfailoverstatus_enum
from ..shared import pendinglogdeliveryconfiguration as shared_pendinglogdeliveryconfiguration
from ..shared import reshardingstatus as shared_reshardingstatus
from ..shared import transitencryptionmode_enum as shared_transitencryptionmode_enum
from ..shared import usergroupsupdatestatus as shared_usergroupsupdatestatus
from typing import Optional


@dataclasses.dataclass
class ReplicationGroupPendingModifiedValues:
    r"""The settings to be applied to the Redis replication group, either immediately or during the next maintenance window."""
    
    auth_token_status: Optional[shared_authtokenupdatestatus_enum.AuthTokenUpdateStatusEnum] = dataclasses.field(default=None)  
    automatic_failover_status: Optional[shared_pendingautomaticfailoverstatus_enum.PendingAutomaticFailoverStatusEnum] = dataclasses.field(default=None)  
    log_delivery_configurations: Optional[list[shared_pendinglogdeliveryconfiguration.PendingLogDeliveryConfiguration]] = dataclasses.field(default=None)  
    primary_cluster_id: Optional[str] = dataclasses.field(default=None)  
    resharding: Optional[shared_reshardingstatus.ReshardingStatus] = dataclasses.field(default=None)  
    transit_encryption_enabled: Optional[bool] = dataclasses.field(default=None)  
    transit_encryption_mode: Optional[shared_transitencryptionmode_enum.TransitEncryptionModeEnum] = dataclasses.field(default=None)  
    user_groups: Optional[shared_usergroupsupdatestatus.UserGroupsUpdateStatus] = dataclasses.field(default=None)  
    