import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import periodunit_enum as shared_periodunit_enum


@dataclass_json
@dataclasses.dataclass
class QuotaPeriod:
    r"""QuotaPeriod
    Information about the quota period.
    """
    
    period_unit: Optional[shared_periodunit_enum.PeriodUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodUnit') }})
    period_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodValue') }})
    
