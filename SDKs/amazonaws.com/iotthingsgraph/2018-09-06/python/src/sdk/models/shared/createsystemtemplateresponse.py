import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemtemplatesummary as shared_systemtemplatesummary


@dataclass_json
@dataclasses.dataclass
class CreateSystemTemplateResponse:
    summary: Optional[shared_systemtemplatesummary.SystemTemplateSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
