import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studio as shared_studio


@dataclass_json
@dataclasses.dataclass
class ListStudiosResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    studios: Optional[list[shared_studio.Studio]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studios') }})
    
