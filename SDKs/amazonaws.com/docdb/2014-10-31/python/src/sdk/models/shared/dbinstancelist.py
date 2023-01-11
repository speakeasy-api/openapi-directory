import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import dbsubnetgroup as shared_dbsubnetgroup
from ..shared import endpoint as shared_endpoint
from ..shared import pendingmodifiedvalues as shared_pendingmodifiedvalues
from ..shared import dbinstancestatusinfolist as shared_dbinstancestatusinfolist
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class DbInstanceList:
    r"""DbInstanceList
    Detailed information about an instance. 
    """
    
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    ca_certificate_identifier: Optional[str] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_arn: Optional[str] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    db_instance_identifier: Optional[str] = dataclasses.field(default=None)
    db_instance_status: Optional[str] = dataclasses.field(default=None)
    db_subnet_group: Optional[shared_dbsubnetgroup.DbSubnetGroup] = dataclasses.field(default=None)
    dbi_resource_id: Optional[str] = dataclasses.field(default=None)
    enabled_cloudwatch_logs_exports: Optional[list[str]] = dataclasses.field(default=None)
    endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    instance_create_time: Optional[datetime] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    latest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    pending_modified_values: Optional[shared_pendingmodifiedvalues.PendingModifiedValues] = dataclasses.field(default=None)
    preferred_backup_window: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    promotion_tier: Optional[int] = dataclasses.field(default=None)
    publicly_accessible: Optional[bool] = dataclasses.field(default=None)
    status_infos: Optional[list[shared_dbinstancestatusinfolist.DbInstanceStatusInfoList]] = dataclasses.field(default=None)
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)
    vpc_security_groups: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
