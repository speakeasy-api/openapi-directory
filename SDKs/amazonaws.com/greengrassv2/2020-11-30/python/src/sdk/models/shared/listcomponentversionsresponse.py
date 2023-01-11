import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentversionlistitem as shared_componentversionlistitem


@dataclass_json
@dataclasses.dataclass
class ListComponentVersionsResponse:
    component_versions: Optional[list[shared_componentversionlistitem.ComponentVersionListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
