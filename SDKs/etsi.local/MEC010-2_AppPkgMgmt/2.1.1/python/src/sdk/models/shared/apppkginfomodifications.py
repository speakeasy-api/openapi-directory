import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AppPkgInfoModificationsOperationStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclasses.dataclass
class AppPkgInfoModifications:
    r"""AppPkgInfoModifications
    'The data type represents the operational state for an application package resource'
    """
    
    operation_state: AppPkgInfoModificationsOperationStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationState') }})
    
