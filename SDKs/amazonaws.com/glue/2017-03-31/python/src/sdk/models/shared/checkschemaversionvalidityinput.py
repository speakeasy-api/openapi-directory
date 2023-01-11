import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataformat_enum as shared_dataformat_enum


@dataclass_json
@dataclasses.dataclass
class CheckSchemaVersionValidityInput:
    data_format: shared_dataformat_enum.DataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    schema_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDefinition') }})
    
