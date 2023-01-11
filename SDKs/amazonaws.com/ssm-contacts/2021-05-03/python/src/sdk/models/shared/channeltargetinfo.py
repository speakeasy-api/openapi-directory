import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelTargetInfo:
    r"""ChannelTargetInfo
    Information about the contact channel that Incident Manager uses to engage the contact.
    """
    
    contact_channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelId') }})
    retry_interval_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryIntervalInMinutes') }})
    
