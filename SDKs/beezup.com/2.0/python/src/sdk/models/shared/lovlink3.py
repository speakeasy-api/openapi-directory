import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpmethod_enum as shared_httpmethod_enum


@dataclass_json
@dataclasses.dataclass
class LovLink3:
    r"""LovLink3
    Describe the way you have to follow to get access to the LOV
    """
    
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    method: Optional[shared_httpmethod_enum.HTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
