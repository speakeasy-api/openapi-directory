import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cachesettings as shared_cachesettings
from ..shared import cachebehaviorperpath as shared_cachebehaviorperpath
from ..shared import cachebehavior as shared_cachebehavior
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import inputorigin as shared_inputorigin
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDistributionRequest:
    bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    default_cache_behavior: shared_cachebehavior.CacheBehavior = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCacheBehavior') }})
    distribution_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionName') }})
    origin: shared_inputorigin.InputOrigin = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    cache_behavior_settings: Optional[shared_cachesettings.CacheSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviorSettings') }})
    cache_behaviors: Optional[list[shared_cachebehaviorperpath.CacheBehaviorPerPath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviors') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
