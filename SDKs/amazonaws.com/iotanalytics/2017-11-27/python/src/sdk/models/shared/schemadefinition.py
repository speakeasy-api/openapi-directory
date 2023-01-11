import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import column as shared_column


@dataclass_json
@dataclasses.dataclass
class SchemaDefinition:
    r"""SchemaDefinition
    Information needed to define a schema.
    """
    
    columns: Optional[list[shared_column.Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
