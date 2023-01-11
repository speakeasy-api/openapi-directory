import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowtemplatesummary as shared_flowtemplatesummary


@dataclass_json
@dataclasses.dataclass
class GetFlowTemplateRevisionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    summaries: Optional[list[shared_flowtemplatesummary.FlowTemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
