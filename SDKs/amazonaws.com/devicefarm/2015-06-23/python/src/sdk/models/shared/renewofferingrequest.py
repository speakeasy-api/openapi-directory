import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RenewOfferingRequest:
    r"""RenewOfferingRequest
    A request that represents an offering renewal.
    """
    
    offering_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    quantity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
