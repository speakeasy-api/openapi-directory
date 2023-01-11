import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storedquery as shared_storedquery


@dataclass_json
@dataclasses.dataclass
class GetStoredQueryResponse:
    stored_query: Optional[shared_storedquery.StoredQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredQuery') }})
    
