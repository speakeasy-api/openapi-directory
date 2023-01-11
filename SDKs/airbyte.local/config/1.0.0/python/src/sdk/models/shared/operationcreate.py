import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatorconfiguration as shared_operatorconfiguration


@dataclass_json
@dataclasses.dataclass
class OperationCreate:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator_configuration: shared_operatorconfiguration.OperatorConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorConfiguration') }})
    workspace_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
