import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customkeystoreslistentry as shared_customkeystoreslistentry


@dataclass_json
@dataclasses.dataclass
class DescribeCustomKeyStoresResponse:
    custom_key_stores: Optional[list[shared_customkeystoreslistentry.CustomKeyStoresListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStores') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Truncated') }})
    
