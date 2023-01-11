import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import app as shared_app


@dataclass_json
@dataclasses.dataclass
class ListAppsResult:
    r"""ListAppsResult
     The result structure for an Amplify app list request. 
    """
    
    apps: list[shared_app.App] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
