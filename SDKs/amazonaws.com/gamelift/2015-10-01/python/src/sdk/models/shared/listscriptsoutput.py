import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import script as shared_script


@dataclass_json
@dataclasses.dataclass
class ListScriptsOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scripts: Optional[list[shared_script.Script]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scripts') }})
    
