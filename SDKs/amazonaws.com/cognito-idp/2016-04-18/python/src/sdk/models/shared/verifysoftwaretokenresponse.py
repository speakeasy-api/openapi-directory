import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verifysoftwaretokenresponsetype_enum as shared_verifysoftwaretokenresponsetype_enum


@dataclass_json
@dataclasses.dataclass
class VerifySoftwareTokenResponse:
    session: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    status: Optional[shared_verifysoftwaretokenresponsetype_enum.VerifySoftwareTokenResponseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
