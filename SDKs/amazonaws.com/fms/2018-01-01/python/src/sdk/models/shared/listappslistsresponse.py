import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appslistdatasummary as shared_appslistdatasummary


@dataclass_json
@dataclasses.dataclass
class ListAppsListsResponse:
    apps_lists: Optional[list[shared_appslistdatasummary.AppsListDataSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsLists') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
