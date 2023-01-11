import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastoresummary as shared_datastoresummary


@dataclass_json
@dataclasses.dataclass
class ListDatastoresResponse:
    datastore_summaries: Optional[list[shared_datastoresummary.DatastoreSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
