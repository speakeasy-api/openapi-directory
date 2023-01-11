import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import humanloopactivationoutput as shared_humanloopactivationoutput
from ..shared import moderationlabel as shared_moderationlabel


@dataclass_json
@dataclasses.dataclass
class DetectModerationLabelsResponse:
    human_loop_activation_output: Optional[shared_humanloopactivationoutput.HumanLoopActivationOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationOutput') }})
    moderation_labels: Optional[list[shared_moderationlabel.ModerationLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationLabels') }})
    moderation_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationModelVersion') }})
    
