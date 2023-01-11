import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DisableDomainTransferLockResponse:
    r"""DisableDomainTransferLockResponse
    The DisableDomainTransferLock response includes the following element.
    """
    
    operation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    
