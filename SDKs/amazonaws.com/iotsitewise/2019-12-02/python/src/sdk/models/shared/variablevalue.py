import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VariableValue:
    r"""VariableValue
    Identifies a property value used in an expression.
    """
    
    property_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    hierarchy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyId') }})
    
