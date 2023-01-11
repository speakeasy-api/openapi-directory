import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationevent as shared_configurationevent


@dataclass_json
@dataclasses.dataclass
class ListConfigurationHistoryResponse:
    event_list: Optional[list[shared_configurationevent.ConfigurationEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
