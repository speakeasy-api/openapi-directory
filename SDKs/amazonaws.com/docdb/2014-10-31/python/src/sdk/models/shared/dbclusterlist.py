import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import dbclusterroles as shared_dbclusterroles
from ..shared import dbclustermemberlist as shared_dbclustermemberlist
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class DbClusterList:
    r"""DbClusterList
    Detailed information about a cluster. 
    """
    
    associated_roles: Optional[list[shared_dbclusterroles.DbClusterRoles]] = dataclasses.field(default=None)
    availability_zones: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    db_cluster_members: Optional[list[shared_dbclustermemberlist.DbClusterMemberList]] = dataclasses.field(default=None)
    db_cluster_parameter_group: Optional[str] = dataclasses.field(default=None)
    db_subnet_group: Optional[str] = dataclasses.field(default=None)
    db_cluster_resource_id: Optional[str] = dataclasses.field(default=None)
    deletion_protection: Optional[bool] = dataclasses.field(default=None)
    earliest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    enabled_cloudwatch_logs_exports: Optional[list[str]] = dataclasses.field(default=None)
    endpoint: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    hosted_zone_id: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    latest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    multi_az: Optional[bool] = dataclasses.field(default=None)
    percent_progress: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    preferred_backup_window: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    read_replica_identifiers: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    reader_endpoint: Optional[str] = dataclasses.field(default=None)
    replication_source_identifier: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)
    vpc_security_groups: Optional[list[shared_vpcsecuritygroupmembershiplist.VpcSecurityGroupMembershipList]] = dataclasses.field(default=None)
    
