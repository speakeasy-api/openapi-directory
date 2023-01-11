import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import roletype_enum as shared_roletype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateRole:
    role: shared_roletype_enum.RoleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
