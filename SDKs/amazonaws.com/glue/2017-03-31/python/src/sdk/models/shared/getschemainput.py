import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaid as shared_schemaid


@dataclass_json
@dataclasses.dataclass
class GetSchemaInput:
    schema_id: shared_schemaid.SchemaID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    
