import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storedquerymetadata as shared_storedquerymetadata


@dataclass_json
@dataclasses.dataclass
class ListStoredQueriesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    stored_query_metadata: Optional[list[shared_storedquerymetadata.StoredQueryMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredQueryMetadata') }})
    
