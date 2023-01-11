import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteTrustRequest:
    r"""DeleteTrustRequest
    Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
    """
    
    trust_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    delete_associated_conditional_forwarder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteAssociatedConditionalForwarder') }})
    
