import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderoperationresponse as shared_orderoperationresponse


@dataclass_json
@dataclasses.dataclass
class BatchOrderOperationResponse:
    r"""BatchOrderOperationResponse
    The response given by the batch operation
    """
    
    operations: list[shared_orderoperationresponse.OrderOperationResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
