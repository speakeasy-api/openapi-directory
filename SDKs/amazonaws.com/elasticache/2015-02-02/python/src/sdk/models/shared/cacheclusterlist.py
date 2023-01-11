import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import cachenodelist as shared_cachenodelist
from ..shared import cacheparametergroupstatus as shared_cacheparametergroupstatus
from ..shared import cachesecuritygroupmembershiplist as shared_cachesecuritygroupmembershiplist
from ..shared import endpoint as shared_endpoint
from ..shared import logdeliveryconfigurationlist as shared_logdeliveryconfigurationlist
from ..shared import notificationconfiguration as shared_notificationconfiguration
from ..shared import pendingmodifiedvalues as shared_pendingmodifiedvalues
from ..shared import securitygroupmembership as shared_securitygroupmembership


@dataclasses.dataclass
class CacheClusterList:
    r"""CacheClusterList
    Contains all of the attributes of a specific cluster.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    at_rest_encryption_enabled: Optional[bool] = dataclasses.field(default=None)
    auth_token_enabled: Optional[bool] = dataclasses.field(default=None)
    auth_token_last_modified_date: Optional[datetime] = dataclasses.field(default=None)
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    cache_cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    cache_cluster_id: Optional[str] = dataclasses.field(default=None)
    cache_cluster_status: Optional[str] = dataclasses.field(default=None)
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    cache_nodes: Optional[list[shared_cachenodelist.CacheNodeList]] = dataclasses.field(default=None)
    cache_parameter_group: Optional[shared_cacheparametergroupstatus.CacheParameterGroupStatus] = dataclasses.field(default=None)
    cache_security_groups: Optional[list[shared_cachesecuritygroupmembershiplist.CacheSecurityGroupMembershipList]] = dataclasses.field(default=None)
    cache_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    client_download_landing_page: Optional[str] = dataclasses.field(default=None)
    configuration_endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    log_delivery_configurations: Optional[list[shared_logdeliveryconfigurationlist.LogDeliveryConfigurationList]] = dataclasses.field(default=None)
    notification_configuration: Optional[shared_notificationconfiguration.NotificationConfiguration] = dataclasses.field(default=None)
    num_cache_nodes: Optional[int] = dataclasses.field(default=None)
    pending_modified_values: Optional[shared_pendingmodifiedvalues.PendingModifiedValues] = dataclasses.field(default=None)
    preferred_availability_zone: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    preferred_outpost_arn: Optional[str] = dataclasses.field(default=None)
    replication_group_id: Optional[str] = dataclasses.field(default=None)
    replication_group_log_delivery_enabled: Optional[bool] = dataclasses.field(default=None)
    security_groups: Optional[list[shared_securitygroupmembership.SecurityGroupMembership]] = dataclasses.field(default=None)
    snapshot_retention_limit: Optional[int] = dataclasses.field(default=None)
    snapshot_window: Optional[str] = dataclasses.field(default=None)
    transit_encryption_enabled: Optional[bool] = dataclasses.field(default=None)
    
