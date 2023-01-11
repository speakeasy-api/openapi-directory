import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experimenttemplate as shared_experimenttemplate


@dataclass_json
@dataclasses.dataclass
class DeleteExperimentTemplateResponse:
    experiment_template: Optional[shared_experimenttemplate.ExperimentTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentTemplate') }})
    
