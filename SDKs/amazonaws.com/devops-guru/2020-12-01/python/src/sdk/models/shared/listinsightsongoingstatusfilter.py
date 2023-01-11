import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insighttype_enum as shared_insighttype_enum


@dataclass_json
@dataclasses.dataclass
class ListInsightsOngoingStatusFilter:
    r"""ListInsightsOngoingStatusFilter
     Used to filter for insights that have the status <code>ONGOING</code>. 
    """
    
    type: shared_insighttype_enum.InsightTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
