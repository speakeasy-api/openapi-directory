import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccesstype_enum as shared_environmentaccesstype_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentAccessModel:
    environment_access_type: Optional[shared_environmentaccesstype_enum.EnvironmentAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccessType') }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
