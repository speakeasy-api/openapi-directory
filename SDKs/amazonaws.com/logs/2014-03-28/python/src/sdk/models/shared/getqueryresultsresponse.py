import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resultfield as shared_resultfield
from ..shared import querystatistics as shared_querystatistics
from ..shared import querystatus_enum as shared_querystatus_enum


@dataclass_json
@dataclasses.dataclass
class GetQueryResultsResponse:
    results: Optional[list[list[shared_resultfield.ResultField]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    statistics: Optional[shared_querystatistics.QueryStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[shared_querystatus_enum.QueryStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
