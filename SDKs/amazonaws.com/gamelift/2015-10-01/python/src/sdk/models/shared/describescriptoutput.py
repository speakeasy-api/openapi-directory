import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import script as shared_script


@dataclass_json
@dataclasses.dataclass
class DescribeScriptOutput:
    script: Optional[shared_script.Script] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Script') }})
    
