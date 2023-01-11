import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationresponse as shared_applicationresponse


@dataclass_json
@dataclasses.dataclass
class ApplicationsResponse:
    r"""ApplicationsResponse
    Provides information about all of your applications.
    """
    
    item: Optional[list[shared_applicationresponse.ApplicationResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
