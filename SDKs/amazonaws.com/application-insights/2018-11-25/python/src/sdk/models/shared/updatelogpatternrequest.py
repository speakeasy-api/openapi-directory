import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateLogPatternRequest:
    pattern_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternName') }})
    pattern_set_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternSetName') }})
    resource_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rank') }})
    
