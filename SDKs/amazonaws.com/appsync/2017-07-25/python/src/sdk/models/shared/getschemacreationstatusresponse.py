import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemastatus_enum as shared_schemastatus_enum


@dataclass_json
@dataclasses.dataclass
class GetSchemaCreationStatusResponse:
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    status: Optional[shared_schemastatus_enum.SchemaStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
