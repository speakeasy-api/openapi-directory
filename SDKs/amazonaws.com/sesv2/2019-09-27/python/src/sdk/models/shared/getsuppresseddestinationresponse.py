import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppresseddestination as shared_suppresseddestination


@dataclass_json
@dataclasses.dataclass
class GetSuppressedDestinationResponse:
    r"""GetSuppressedDestinationResponse
    Information about the suppressed email address.
    """
    
    suppressed_destination: shared_suppresseddestination.SuppressedDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedDestination') }})
    
