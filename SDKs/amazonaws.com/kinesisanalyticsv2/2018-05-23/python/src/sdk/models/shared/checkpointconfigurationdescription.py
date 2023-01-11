import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationtype_enum as shared_configurationtype_enum


@dataclass_json
@dataclasses.dataclass
class CheckpointConfigurationDescription:
    r"""CheckpointConfigurationDescription
    Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointInterval') }})
    checkpointing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointingEnabled') }})
    configuration_type: Optional[shared_configurationtype_enum.ConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    min_pause_between_checkpoints: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinPauseBetweenCheckpoints') }})
    
