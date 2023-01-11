import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import delegate as shared_delegate


@dataclass_json
@dataclasses.dataclass
class ListResourceDelegatesResponse:
    delegates: Optional[list[shared_delegate.Delegate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delegates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
