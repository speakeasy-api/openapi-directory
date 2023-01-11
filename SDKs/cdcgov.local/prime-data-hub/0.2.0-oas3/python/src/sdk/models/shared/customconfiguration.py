import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CustomConfigurationFormatEnum(str, Enum):
    CSV = "CSV"
    HL7 = "HL7"


@dataclass_json
@dataclasses.dataclass
class CustomConfiguration:
    r"""CustomConfiguration
    A custom configuration for a custom schema
    """
    
    format: CustomConfigurationFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    schema_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaName') }})
    transport: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    name_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFormat') }})
    receiving_organization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingOrganization') }})
    
