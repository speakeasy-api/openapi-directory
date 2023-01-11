import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetcontentsummary as shared_datasetcontentsummary


@dataclass_json
@dataclasses.dataclass
class ListDatasetContentsResponse:
    dataset_content_summaries: Optional[list[shared_datasetcontentsummary.DatasetContentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetContentSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
