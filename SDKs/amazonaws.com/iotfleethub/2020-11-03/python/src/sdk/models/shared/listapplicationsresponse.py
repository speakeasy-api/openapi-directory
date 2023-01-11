import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsummary as shared_applicationsummary


@dataclass_json
@dataclasses.dataclass
class ListApplicationsResponse:
    application_summaries: Optional[list[shared_applicationsummary.ApplicationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
