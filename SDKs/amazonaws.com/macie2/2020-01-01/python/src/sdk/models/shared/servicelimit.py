import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unit_enum as shared_unit_enum


@dataclass_json
@dataclasses.dataclass
class ServiceLimit:
    r"""ServiceLimit
    Specifies a current quota for an Amazon Macie account.
    """
    
    is_service_limited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isServiceLimited') }})
    unit: Optional[shared_unit_enum.UnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
