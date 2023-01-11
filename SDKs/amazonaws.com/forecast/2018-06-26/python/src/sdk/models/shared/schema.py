import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaattribute as shared_schemaattribute


@dataclass_json
@dataclasses.dataclass
class Schema:
    r"""Schema
    Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
    """
    
    attributes: Optional[list[shared_schemaattribute.SchemaAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    
