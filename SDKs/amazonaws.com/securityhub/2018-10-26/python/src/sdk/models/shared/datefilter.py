import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterange as shared_daterange


@dataclass_json
@dataclasses.dataclass
class DateFilter:
    r"""DateFilter
    A date filter for querying findings.
    """
    
    date_range: Optional[shared_daterange.DateRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateRange') }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Start') }})
    
