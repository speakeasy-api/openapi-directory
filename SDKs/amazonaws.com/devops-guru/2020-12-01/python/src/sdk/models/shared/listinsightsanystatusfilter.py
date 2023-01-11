import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import starttimerange as shared_starttimerange
from ..shared import insighttype_enum as shared_insighttype_enum


@dataclass_json
@dataclasses.dataclass
class ListInsightsAnyStatusFilter:
    r"""ListInsightsAnyStatusFilter
     Used to filter for insights that have any status. 
    """
    
    start_time_range: shared_starttimerange.StartTimeRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeRange') }})
    type: shared_insighttype_enum.InsightTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
