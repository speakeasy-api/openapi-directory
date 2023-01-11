import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibility_enum as shared_compatibility_enum
from ..shared import dataformat_enum as shared_dataformat_enum
from ..shared import registryid as shared_registryid


@dataclass_json
@dataclasses.dataclass
class CreateSchemaInput:
    data_format: shared_dataformat_enum.DataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    schema_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaName') }})
    compatibility: Optional[shared_compatibility_enum.CompatibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compatibility') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    registry_id: Optional[shared_registryid.RegistryID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryId') }})
    schema_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDefinition') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
