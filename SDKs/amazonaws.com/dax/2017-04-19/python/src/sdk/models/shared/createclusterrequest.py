import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterendpointencryptiontype_enum as shared_clusterendpointencryptiontype_enum
from ..shared import ssespecification as shared_ssespecification
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateClusterRequest:
    cluster_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    iam_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    node_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    replication_factor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationFactor') }})
    availability_zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    cluster_endpoint_encryption_type: Optional[shared_clusterendpointencryptiontype_enum.ClusterEndpointEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpointEncryptionType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    notification_topic_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTopicArn') }})
    parameter_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    sse_specification: Optional[shared_ssespecification.SseSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecification') }})
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
