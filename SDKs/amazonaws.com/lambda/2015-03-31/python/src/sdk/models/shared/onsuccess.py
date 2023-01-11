import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OnSuccess:
    r"""OnSuccess
    A destination for events that were processed successfully.
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    
