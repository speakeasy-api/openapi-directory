import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterangeunit_enum as shared_daterangeunit_enum


@dataclass_json
@dataclasses.dataclass
class DateRange:
    r"""DateRange
    A date range for the date filter.
    """
    
    unit: Optional[shared_daterangeunit_enum.DateRangeUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
