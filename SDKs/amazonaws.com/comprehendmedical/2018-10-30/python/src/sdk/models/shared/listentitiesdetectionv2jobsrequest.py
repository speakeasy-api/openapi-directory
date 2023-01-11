import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comprehendmedicalasyncjobfilter as shared_comprehendmedicalasyncjobfilter


@dataclass_json
@dataclasses.dataclass
class ListEntitiesDetectionV2JobsRequest:
    filter: Optional[shared_comprehendmedicalasyncjobfilter.ComprehendMedicalAsyncJobFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
