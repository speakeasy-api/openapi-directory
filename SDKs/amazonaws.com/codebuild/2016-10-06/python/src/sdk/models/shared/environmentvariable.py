import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentvariabletype_enum as shared_environmentvariabletype_enum


@dataclass_json
@dataclasses.dataclass
class EnvironmentVariable:
    r"""EnvironmentVariable
    Information about an environment variable for a build project or a build.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    type: Optional[shared_environmentvariabletype_enum.EnvironmentVariableTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
