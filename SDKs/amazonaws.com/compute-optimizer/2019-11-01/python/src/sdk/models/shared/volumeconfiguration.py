import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VolumeConfiguration:
    r"""VolumeConfiguration
    Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
    """
    
    volume_baseline_iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBaselineIOPS') }})
    volume_baseline_throughput: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBaselineThroughput') }})
    volume_burst_iops: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBurstIOPS') }})
    volume_burst_throughput: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBurstThroughput') }})
    volume_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeSize') }})
    volume_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeType') }})
    
