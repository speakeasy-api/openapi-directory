import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetschemasummary as shared_datasetschemasummary


@dataclass_json
@dataclasses.dataclass
class ListSchemasResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    schemas: Optional[list[shared_datasetschemasummary.DatasetSchemaSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    
