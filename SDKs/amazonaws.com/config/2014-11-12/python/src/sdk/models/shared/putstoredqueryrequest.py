import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storedquery as shared_storedquery
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PutStoredQueryRequest:
    stored_query: shared_storedquery.StoredQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredQuery') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
