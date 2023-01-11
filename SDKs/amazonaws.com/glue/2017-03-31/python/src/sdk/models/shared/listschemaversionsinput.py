import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaid as shared_schemaid


@dataclass_json
@dataclasses.dataclass
class ListSchemaVersionsInput:
    schema_id: shared_schemaid.SchemaID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
