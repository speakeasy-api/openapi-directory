import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobtemplatesummary as shared_jobtemplatesummary


@dataclass_json
@dataclasses.dataclass
class ListJobTemplatesResponse:
    job_templates: Optional[list[shared_jobtemplatesummary.JobTemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
