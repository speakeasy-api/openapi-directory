import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sample as shared_sample


@dataclass_json
@dataclasses.dataclass
class ListSamplesResult:
    r"""ListSamplesResult
    Represents the result of a list samples request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    samples: Optional[list[shared_sample.Sample]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples') }})
    
