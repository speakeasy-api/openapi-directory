import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactchannel as shared_contactchannel


@dataclass_json
@dataclasses.dataclass
class ListContactChannelsResult:
    contact_channels: list[shared_contactchannel.ContactChannel] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannels') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
