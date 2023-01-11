import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_usererrormessage as shared_beezup_common_usererrormessage
from ..shared import orderidentifier as shared_orderidentifier


@dataclass_json
@dataclasses.dataclass
class OrderOperationResponse:
    r"""OrderOperationResponse
    The response given by the batch operation for an order
    """
    
    order: shared_orderidentifier.OrderIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    errors: Optional[list[shared_beezup_common_usererrormessage.BeezUpCommonUserErrorMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
