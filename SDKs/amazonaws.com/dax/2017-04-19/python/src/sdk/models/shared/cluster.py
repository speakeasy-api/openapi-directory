import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpoint as shared_endpoint
from ..shared import clusterendpointencryptiontype_enum as shared_clusterendpointencryptiontype_enum
from ..shared import node as shared_node
from ..shared import notificationconfiguration as shared_notificationconfiguration
from ..shared import parametergroupstatus as shared_parametergroupstatus
from ..shared import ssedescription as shared_ssedescription
from ..shared import securitygroupmembership as shared_securitygroupmembership


@dataclass_json
@dataclasses.dataclass
class Cluster:
    r"""Cluster
    Contains all of the attributes of a specific DAX cluster.
    """
    
    active_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveNodes') }})
    cluster_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    cluster_discovery_endpoint: Optional[shared_endpoint.Endpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterDiscoveryEndpoint') }})
    cluster_endpoint_encryption_type: Optional[shared_clusterendpointencryptiontype_enum.ClusterEndpointEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpointEncryptionType') }})
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    iam_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    node_ids_to_remove: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeIdsToRemove') }})
    node_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nodes') }})
    notification_configuration: Optional[shared_notificationconfiguration.NotificationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfiguration') }})
    parameter_group: Optional[shared_parametergroupstatus.ParameterGroupStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroup') }})
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    sse_description: Optional[shared_ssedescription.SseDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEDescription') }})
    security_groups: Optional[list[shared_securitygroupmembership.SecurityGroupMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subnet_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroup') }})
    total_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalNodes') }})
    
