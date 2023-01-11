import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expiryeventsconfiguration as shared_expiryeventsconfiguration


@dataclass_json
@dataclasses.dataclass
class GetAccountConfigurationResponse:
    expiry_events: Optional[shared_expiryeventsconfiguration.ExpiryEventsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiryEvents') }})
    
