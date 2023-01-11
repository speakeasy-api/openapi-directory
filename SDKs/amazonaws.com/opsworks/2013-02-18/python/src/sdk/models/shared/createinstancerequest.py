import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import architecture_enum as shared_architecture_enum
from ..shared import autoscalingtype_enum as shared_autoscalingtype_enum
from ..shared import blockdevicemapping as shared_blockdevicemapping
from ..shared import rootdevicetype_enum as shared_rootdevicetype_enum


@dataclass_json
@dataclasses.dataclass
class CreateInstanceRequest:
    instance_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    layer_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerIds') }})
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    agent_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersion') }})
    ami_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiId') }})
    architecture: Optional[shared_architecture_enum.ArchitectureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Architecture') }})
    auto_scaling_type: Optional[shared_autoscalingtype_enum.AutoScalingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingType') }})
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    block_device_mappings: Optional[list[shared_blockdevicemapping.BlockDeviceMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockDeviceMappings') }})
    ebs_optimized: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    install_updates_on_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    os: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Os') }})
    root_device_type: Optional[shared_rootdevicetype_enum.RootDeviceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDeviceType') }})
    ssh_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKeyName') }})
    subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    tenancy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    virtualization_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualizationType') }})
    
