import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eula as shared_eula


@dataclass_json
@dataclasses.dataclass
class ListEulasResponse:
    eulas: Optional[list[shared_eula.Eula]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eulas') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
