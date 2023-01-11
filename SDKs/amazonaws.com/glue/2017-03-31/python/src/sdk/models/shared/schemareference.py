import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaid as shared_schemaid


@dataclass_json
@dataclasses.dataclass
class SchemaReference:
    r"""SchemaReference
    An object that references a schema stored in the Glue Schema Registry.
    """
    
    schema_id: Optional[shared_schemaid.SchemaID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    schema_version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
