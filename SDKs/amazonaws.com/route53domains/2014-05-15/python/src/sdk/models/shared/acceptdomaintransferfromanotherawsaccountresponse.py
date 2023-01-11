import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AcceptDomainTransferFromAnotherAwsAccountResponse:
    r"""AcceptDomainTransferFromAnotherAwsAccountResponse
    The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.
    """
    
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    
