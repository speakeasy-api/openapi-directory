import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaversionlistitem as shared_schemaversionlistitem


@dataclass_json
@dataclasses.dataclass
class ListSchemaVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    schemas: Optional[list[shared_schemaversionlistitem.SchemaVersionListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schemas') }})
    
