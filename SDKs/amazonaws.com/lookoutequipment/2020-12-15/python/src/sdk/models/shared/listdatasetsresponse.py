import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetsummary as shared_datasetsummary


@dataclass_json
@dataclasses.dataclass
class ListDatasetsResponse:
    dataset_summaries: Optional[list[shared_datasetsummary.DatasetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
