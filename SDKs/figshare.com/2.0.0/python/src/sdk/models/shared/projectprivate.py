import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectPrivateRoleEnum(str, Enum):
    OWNER = "Owner"
    COLLABORATOR = "Collaborator"
    VIEWER = "Viewer"

class ProjectPrivateStorageEnum(str, Enum):
    INDIVIDUAL = "individual"
    GROUP = "group"


@dataclass_json
@dataclasses.dataclass
class ProjectPrivate:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    published_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_date') }})
    role: Optional[ProjectPrivateRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    storage: Optional[ProjectPrivateStorageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
