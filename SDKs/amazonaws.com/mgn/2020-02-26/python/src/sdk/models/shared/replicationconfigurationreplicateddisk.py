import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationconfigurationreplicateddiskstagingdisktype_enum as shared_replicationconfigurationreplicateddiskstagingdisktype_enum


@dataclass_json
@dataclasses.dataclass
class ReplicationConfigurationReplicatedDisk:
    r"""ReplicationConfigurationReplicatedDisk
    Replication Configuration replicated disk.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iops') }})
    is_boot_disk: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBootDisk') }})
    staging_disk_type: Optional[shared_replicationconfigurationreplicateddiskstagingdisktype_enum.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingDiskType') }})
    
