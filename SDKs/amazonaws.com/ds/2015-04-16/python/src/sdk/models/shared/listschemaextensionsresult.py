import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaextensioninfo as shared_schemaextensioninfo


@dataclass_json
@dataclasses.dataclass
class ListSchemaExtensionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    schema_extensions_info: Optional[list[shared_schemaextensioninfo.SchemaExtensionInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaExtensionsInfo') }})
    
