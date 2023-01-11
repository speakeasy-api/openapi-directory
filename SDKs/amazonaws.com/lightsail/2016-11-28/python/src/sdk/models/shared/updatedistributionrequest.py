import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cachesettings as shared_cachesettings
from ..shared import cachebehaviorperpath as shared_cachebehaviorperpath
from ..shared import cachebehavior as shared_cachebehavior
from ..shared import inputorigin as shared_inputorigin


@dataclass_json
@dataclasses.dataclass
class UpdateDistributionRequest:
    distribution_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionName') }})
    cache_behavior_settings: Optional[shared_cachesettings.CacheSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviorSettings') }})
    cache_behaviors: Optional[list[shared_cachebehaviorperpath.CacheBehaviorPerPath]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheBehaviors') }})
    default_cache_behavior: Optional[shared_cachebehavior.CacheBehavior] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCacheBehavior') }})
    is_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    origin: Optional[shared_inputorigin.InputOrigin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    
