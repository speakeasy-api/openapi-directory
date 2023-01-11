import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabasepasswordversion_enum as shared_relationaldatabasepasswordversion_enum


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseMasterUserPasswordRequest:
    relational_database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    password_version: Optional[shared_relationaldatabasepasswordversion_enum.RelationalDatabasePasswordVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordVersion') }})
    
