import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import variablevalue as shared_variablevalue


@dataclass_json
@dataclasses.dataclass
class ExpressionVariable:
    r"""ExpressionVariable
    Contains expression variable information.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: shared_variablevalue.VariableValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
