import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationversionsummary as shared_applicationversionsummary


@dataclass_json
@dataclasses.dataclass
class ListApplicationVersionsResponse:
    application_version_summaries: Optional[list[shared_applicationversionsummary.ApplicationVersionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
