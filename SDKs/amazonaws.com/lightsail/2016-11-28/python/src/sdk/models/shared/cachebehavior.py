import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behaviorenum_enum as shared_behaviorenum_enum


@dataclass_json
@dataclasses.dataclass
class CacheBehavior:
    r"""CacheBehavior
    Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
    """
    
    behavior: Optional[shared_behaviorenum_enum.BehaviorEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    
