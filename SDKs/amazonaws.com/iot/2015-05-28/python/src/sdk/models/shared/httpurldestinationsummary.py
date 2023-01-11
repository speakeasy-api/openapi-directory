import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPURLDestinationSummary:
    r"""HTTPURLDestinationSummary
    Information about an HTTP URL destination.
    """
    
    confirmation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationUrl') }})
    
