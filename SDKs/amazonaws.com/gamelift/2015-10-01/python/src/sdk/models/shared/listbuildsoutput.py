import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import build as shared_build


@dataclass_json
@dataclasses.dataclass
class ListBuildsOutput:
    r"""ListBuildsOutput
    Represents the returned data in response to a request operation.
    """
    
    builds: Optional[list[shared_build.Build]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Builds') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
