import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fragment as shared_fragment


@dataclass_json
@dataclasses.dataclass
class ListFragmentsOutput:
    fragments: Optional[list[shared_fragment.Fragment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fragments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
