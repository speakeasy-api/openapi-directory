import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apicachingbehavior_enum as shared_apicachingbehavior_enum
from ..shared import apicachestatus_enum as shared_apicachestatus_enum
from ..shared import apicachetype_enum as shared_apicachetype_enum


@dataclass_json
@dataclasses.dataclass
class APICache:
    r"""APICache
    The <code>ApiCache</code> object.
    """
    
    api_caching_behavior: Optional[shared_apicachingbehavior_enum.APICachingBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCachingBehavior') }})
    at_rest_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atRestEncryptionEnabled') }})
    status: Optional[shared_apicachestatus_enum.APICacheStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transit_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionEnabled') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[shared_apicachetype_enum.APICacheTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
