import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration_enum as shared_duration_enum
from ..shared import recencytype_enum as shared_recencytype_enum


@dataclass_json
@dataclasses.dataclass
class RecencyDimension:
    r"""RecencyDimension
    Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
    """
    
    duration: shared_duration_enum.DurationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    recency_type: shared_recencytype_enum.RecencyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecencyType') }})
    
