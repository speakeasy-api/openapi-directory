import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endtimerange as shared_endtimerange
from ..shared import insighttype_enum as shared_insighttype_enum


@dataclass_json
@dataclasses.dataclass
class ListInsightsClosedStatusFilter:
    r"""ListInsightsClosedStatusFilter
     Used to filter for insights that have the status <code>CLOSED</code>. 
    """
    
    end_time_range: shared_endtimerange.EndTimeRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimeRange') }})
    type: shared_insighttype_enum.InsightTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
