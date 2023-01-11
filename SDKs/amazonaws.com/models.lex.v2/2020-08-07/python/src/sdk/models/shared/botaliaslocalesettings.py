import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codehookspecification as shared_codehookspecification


@dataclass_json
@dataclasses.dataclass
class BotAliasLocaleSettings:
    code_hook_specification: Optional[shared_codehookspecification.CodeHookSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeHookSpecification') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
