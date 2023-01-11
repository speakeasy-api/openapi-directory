import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dkimstatus_enum as shared_dkimstatus_enum


@dataclass_json
@dataclasses.dataclass
class DkimAttributes:
    r"""DkimAttributes
    An object that contains information about the DKIM configuration for an email identity.
    """
    
    signing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningEnabled') }})
    status: Optional[shared_dkimstatus_enum.DkimStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tokens') }})
    
