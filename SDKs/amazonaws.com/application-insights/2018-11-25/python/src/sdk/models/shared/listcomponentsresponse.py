import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationcomponent as shared_applicationcomponent


@dataclass_json
@dataclasses.dataclass
class ListComponentsResponse:
    application_component_list: Optional[list[shared_applicationcomponent.ApplicationComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationComponentList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
