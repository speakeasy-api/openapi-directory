import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import returnaddress as shared_returnaddress


@dataclass_json
@dataclasses.dataclass
class AcceptPaymentDisputeRequest:
    r"""AcceptPaymentDisputeRequest
    This type is used by base request of the acceptPaymentDispute method.
    """
    
    return_address: Optional[shared_returnaddress.ReturnAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnAddress') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
