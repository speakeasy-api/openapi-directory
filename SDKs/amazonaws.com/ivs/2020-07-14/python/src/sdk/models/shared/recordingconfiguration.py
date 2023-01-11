import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationconfiguration as shared_destinationconfiguration
from ..shared import recordingconfigurationstate_enum as shared_recordingconfigurationstate_enum


@dataclass_json
@dataclasses.dataclass
class RecordingConfiguration:
    r"""RecordingConfiguration
    An object representing a configuration to record a channel stream.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    destination_configuration: shared_destinationconfiguration.DestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfiguration') }})
    state: shared_recordingconfigurationstate_enum.RecordingConfigurationStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
