import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experimenttemplatesummary as shared_experimenttemplatesummary


@dataclass_json
@dataclasses.dataclass
class ListExperimentTemplatesResponse:
    experiment_templates: Optional[list[shared_experimenttemplatesummary.ExperimentTemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experimentTemplates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
