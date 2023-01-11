import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnableDomainTransferLockResponse:
    r"""EnableDomainTransferLockResponse
    The EnableDomainTransferLock response includes the following elements.
    """
    
    operation_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    
