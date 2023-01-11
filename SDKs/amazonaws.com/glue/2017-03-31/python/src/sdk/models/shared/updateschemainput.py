import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibility_enum as shared_compatibility_enum
from ..shared import schemaid as shared_schemaid
from ..shared import schemaversionnumber as shared_schemaversionnumber


@dataclass_json
@dataclasses.dataclass
class UpdateSchemaInput:
    schema_id: shared_schemaid.SchemaID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    compatibility: Optional[shared_compatibility_enum.CompatibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compatibility') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    schema_version_number: Optional[shared_schemaversionnumber.SchemaVersionNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
