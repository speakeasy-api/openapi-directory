import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templatesummary as shared_templatesummary


@dataclass_json
@dataclasses.dataclass
class ListWorldTemplatesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    template_summaries: Optional[list[shared_templatesummary.TemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateSummaries') }})
    
