import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cachemode_enum as shared_cachemode_enum
from ..shared import cachetype_enum as shared_cachetype_enum


@dataclass_json
@dataclasses.dataclass
class ProjectCache:
    r"""ProjectCache
    Information about the cache for the build project.
    """
    
    type: shared_cachetype_enum.CacheTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    modes: Optional[list[shared_cachemode_enum.CacheModeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modes') }})
    
