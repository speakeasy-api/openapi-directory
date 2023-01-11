import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import dbclusterroles as shared_dbclusterroles
from ..shared import dbclustermemberlist as shared_dbclustermemberlist
from ..shared import dbclusteroptiongroupmemberships as shared_dbclusteroptiongroupmemberships
from ..shared import vpcsecuritygroupmembershiplist as shared_vpcsecuritygroupmembershiplist


@dataclasses.dataclass
class DbCluster:
    r"""DbCluster
    <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
    """
    
    allocated_storage: Optional[int] = dataclasses.field(default=None)
    associated_roles: Optional[list[shared_dbclusterroles.DbClusterRoles]] = dataclasses.field(default=None)
    automatic_restart_time: Optional[datetime] = dataclasses.field(default=None)
    availability_zones: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    backup_retention_period: Optional[int] = dataclasses.field(default=None)
    character_set_name: Optional[str] = dataclasses.field(default=None)
    clone_group_id: Optional[str] = dataclasses.field(default=None)
    cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    copy_tags_to_snapshot: Optional[bool] = dataclasses.field(default=None)
    cross_account_clone: Optional[bool] = dataclasses.field(default=None)
    db_cluster_arn: Optional[str] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    db_cluster_members: Optional[list[shared_dbclustermemberlist.DbClusterMemberList]] = dataclasses.field(default=None)
    db_cluster_option_group_memberships: Optional[list[shared_dbclusteroptiongroupmemberships.DbClusterOptionGroupMemberships]] = dataclasses.field(default=None)
    db_cluster_parameter_group: Optional[str] = dataclasses.field(default=None)
    db_subnet_group: Optional[str] = dataclasses.field(default=None)
    database_name: Optional[str] = dataclasses.field(default=None)
    db_cluster_resource_id: Optional[str] = dataclasses.field(default=None)
    deletion_protection: Optional[bool] = dataclasses.field(default=None)
    earliest_restorable_time: Optional[datetime] = dataclasses.field(default=None)
    enabled_cloudwatch_logs_exports: Optional[list[str]] = dataclasses.field(default=None)
    endpoint: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    hosted_zone_id: Optional[str] = dataclasses.field(default=None)
    iam_database_authentication_enabled: Optional[bool] = dataclasses.field(default=None)
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
    
