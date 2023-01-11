import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination


@dataclass_json
@dataclasses.dataclass
class PutDestinationResponse:
    destination: Optional[shared_destination.Destination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    
