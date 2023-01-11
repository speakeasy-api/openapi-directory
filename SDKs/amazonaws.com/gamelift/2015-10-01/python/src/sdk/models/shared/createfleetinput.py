import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateconfiguration as shared_certificateconfiguration
from ..shared import ippermission as shared_ippermission
from ..shared import ec2instancetype_enum as shared_ec2instancetype_enum
from ..shared import fleettype_enum as shared_fleettype_enum
from ..shared import locationconfiguration as shared_locationconfiguration
from ..shared import protectionpolicy_enum as shared_protectionpolicy_enum
from ..shared import resourcecreationlimitpolicy as shared_resourcecreationlimitpolicy
from ..shared import runtimeconfiguration as shared_runtimeconfiguration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateFleetInput:
    r"""CreateFleetInput
    Represents the input for a request operation.
    """
    
    ec2_instance_type: shared_ec2instancetype_enum.Ec2InstanceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildId') }})
    certificate_configuration: Optional[shared_certificateconfiguration.CertificateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateConfiguration') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    ec2_inbound_permissions: Optional[list[shared_ippermission.IPPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InboundPermissions') }})
    fleet_type: Optional[shared_fleettype_enum.FleetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    instance_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRoleArn') }})
    locations: Optional[list[shared_locationconfiguration.LocationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locations') }})
    log_paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPaths') }})
    metric_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    new_game_session_protection_policy: Optional[shared_protectionpolicy_enum.ProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    peer_vpc_aws_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcAwsAccountId') }})
    peer_vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcId') }})
    resource_creation_limit_policy: Optional[shared_resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    runtime_configuration: Optional[shared_runtimeconfiguration.RuntimeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeConfiguration') }})
    script_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptId') }})
    server_launch_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchParameters') }})
    server_launch_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchPath') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
