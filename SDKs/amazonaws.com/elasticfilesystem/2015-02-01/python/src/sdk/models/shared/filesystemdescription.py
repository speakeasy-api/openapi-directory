import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclestate_enum as shared_lifecyclestate_enum
from ..shared import performancemode_enum as shared_performancemode_enum
from ..shared import filesystemsize as shared_filesystemsize
from ..shared import tag as shared_tag
from ..shared import throughputmode_enum as shared_throughputmode_enum


@dataclass_json
@dataclasses.dataclass
class FileSystemDescription:
    r"""FileSystemDescription
    A description of the file system.
    """
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationToken') }})
    file_system_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    life_cycle_state: shared_lifecyclestate_enum.LifeCycleStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycleState') }})
    number_of_mount_targets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfMountTargets') }})
    owner_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    performance_mode: shared_performancemode_enum.PerformanceModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceMode') }})
    size_in_bytes: shared_filesystemsize.FileSystemSize = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInBytes') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    availability_zone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneId') }})
    availability_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZoneName') }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    file_system_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemArn') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    provisioned_throughput_in_mibps: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputInMibps') }})
    throughput_mode: Optional[shared_throughputmode_enum.ThroughputModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThroughputMode') }})
    
