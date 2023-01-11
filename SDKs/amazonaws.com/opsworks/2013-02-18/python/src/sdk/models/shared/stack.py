import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chefconfiguration as shared_chefconfiguration
from ..shared import stackconfigurationmanager as shared_stackconfigurationmanager
from ..shared import source as shared_source
from ..shared import rootdevicetype_enum as shared_rootdevicetype_enum


@dataclass_json
@dataclasses.dataclass
class Stack:
    r"""Stack
    Describes a stack.
    """
    
    agent_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersion') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    chef_configuration: Optional[shared_chefconfiguration.ChefConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChefConfiguration') }})
    configuration_manager: Optional[shared_stackconfigurationmanager.StackConfigurationManager] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationManager') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    custom_cookbooks_source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomCookbooksSource') }})
    custom_json: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    default_availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAvailabilityZone') }})
    default_instance_profile_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultInstanceProfileArn') }})
    default_os: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultOs') }})
    default_root_device_type: Optional[shared_rootdevicetype_enum.RootDeviceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultRootDeviceType') }})
    default_ssh_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSshKeyName') }})
    default_subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubnetId') }})
    hostname_theme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostnameTheme') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    stack_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    use_custom_cookbooks: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCustomCookbooks') }})
    use_opsworks_security_groups: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseOpsworksSecurityGroups') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
