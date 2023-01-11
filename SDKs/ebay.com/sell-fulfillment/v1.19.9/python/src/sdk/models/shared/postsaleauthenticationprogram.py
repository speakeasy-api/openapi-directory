import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostSaleAuthenticationProgram:
    r"""PostSaleAuthenticationProgram
    This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
    """
    
    outcome_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcomeReason') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
