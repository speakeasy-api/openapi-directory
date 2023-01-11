import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appsummary as shared_appsummary
from ..shared import servergroup as shared_servergroup
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class GetAppResponse:
    app_summary: Optional[shared_appsummary.AppSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSummary') }})
    server_groups: Optional[list[shared_servergroup.ServerGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroups') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
