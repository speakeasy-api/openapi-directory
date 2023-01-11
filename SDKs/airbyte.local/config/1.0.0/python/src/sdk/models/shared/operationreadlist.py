import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationread as shared_operationread


@dataclass_json
@dataclasses.dataclass
class OperationReadList:
    operations: list[shared_operationread.OperationRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
