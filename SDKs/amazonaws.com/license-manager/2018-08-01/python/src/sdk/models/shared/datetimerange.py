import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatetimeRange:
    r"""DatetimeRange
    Describes a time range, in ISO8601-UTC format.
    """
    
    begin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Begin') }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    
