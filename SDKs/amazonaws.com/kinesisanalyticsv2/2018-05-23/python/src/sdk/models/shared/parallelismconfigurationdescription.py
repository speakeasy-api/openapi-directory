import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationtype_enum as shared_configurationtype_enum


@dataclass_json
@dataclasses.dataclass
class ParallelismConfigurationDescription:
    r"""ParallelismConfigurationDescription
    Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
    """
    
    auto_scaling_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingEnabled') }})
    configuration_type: Optional[shared_configurationtype_enum.ConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    current_parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentParallelism') }})
    parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parallelism') }})
    parallelism_per_kpu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismPerKPU') }})
    
