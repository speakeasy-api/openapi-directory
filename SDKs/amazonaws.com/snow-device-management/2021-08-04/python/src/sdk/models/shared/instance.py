import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceblockdevicemapping as shared_instanceblockdevicemapping
from ..shared import cpuoptions as shared_cpuoptions
from ..shared import securitygroupidentifier as shared_securitygroupidentifier
from ..shared import instancestate as shared_instancestate


@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
    """
    
    ami_launch_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiLaunchIndex') }})
    block_device_mappings: Optional[list[shared_instanceblockdevicemapping.InstanceBlockDeviceMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    cpu_options: Optional[shared_cpuoptions.CPUOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuOptions') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    private_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIpAddress') }})
    public_ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIpAddress') }})
    root_device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootDeviceName') }})
    security_groups: Optional[list[shared_securitygroupidentifier.SecurityGroupIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    state: Optional[shared_instancestate.InstanceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
