import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insighttype_enum as shared_insighttype_enum


@dataclass_json
@dataclasses.dataclass
class InsightSelector:
    r"""InsightSelector
    A JSON string that contains a list of insight types that are logged on a trail.
    """
    
    insight_type: Optional[shared_insighttype_enum.InsightTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightType') }})
    
