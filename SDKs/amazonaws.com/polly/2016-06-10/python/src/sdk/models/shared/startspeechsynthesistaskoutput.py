import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import synthesistask as shared_synthesistask


@dataclass_json
@dataclasses.dataclass
class StartSpeechSynthesisTaskOutput:
    synthesis_task: Optional[shared_synthesistask.SynthesisTask] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SynthesisTask') }})
    
