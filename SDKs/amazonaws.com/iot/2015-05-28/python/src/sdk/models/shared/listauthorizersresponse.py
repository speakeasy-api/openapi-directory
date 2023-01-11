import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizersummary as shared_authorizersummary


@dataclass_json
@dataclasses.dataclass
class ListAuthorizersResponse:
    authorizers: Optional[list[shared_authorizersummary.AuthorizerSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizers') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    
