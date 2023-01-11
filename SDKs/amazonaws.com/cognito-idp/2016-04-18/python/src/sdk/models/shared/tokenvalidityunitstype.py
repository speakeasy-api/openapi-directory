import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeunitstype_enum as shared_timeunitstype_enum


@dataclass_json
@dataclasses.dataclass
class TokenValidityUnitsType:
    r"""TokenValidityUnitsType
    The data type for TokenValidityUnits that specifics the time measurements for token validity.
    """
    
    access_token: Optional[shared_timeunitstype_enum.TimeUnitsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    id_token: Optional[shared_timeunitstype_enum.TimeUnitsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdToken') }})
    refresh_token: Optional[shared_timeunitstype_enum.TimeUnitsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshToken') }})
    
