import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scripttype_enum as shared_scripttype_enum
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class UserDataValidationParameters:
    r"""UserDataValidationParameters
    Contains validation parameters.
    """
    
    script_type: Optional[shared_scripttype_enum.ScriptTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptType') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
