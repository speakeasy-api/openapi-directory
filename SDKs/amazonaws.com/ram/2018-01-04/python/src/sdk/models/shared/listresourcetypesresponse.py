import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicenameandresourcetype as shared_servicenameandresourcetype


@dataclass_json
@dataclasses.dataclass
class ListResourceTypesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_types: Optional[list[shared_servicenameandresourcetype.ServiceNameAndResourceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    
