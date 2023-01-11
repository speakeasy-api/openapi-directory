import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamprocessorinput as shared_streamprocessorinput
from ..shared import streamprocessoroutput as shared_streamprocessoroutput
from ..shared import streamprocessorsettings as shared_streamprocessorsettings


@dataclass_json
@dataclasses.dataclass
class CreateStreamProcessorRequest:
    input: shared_streamprocessorinput.StreamProcessorInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output: shared_streamprocessoroutput.StreamProcessorOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    settings: shared_streamprocessorsettings.StreamProcessorSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
