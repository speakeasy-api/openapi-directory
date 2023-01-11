import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channel as shared_channel


@dataclass_json
@dataclasses.dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
    """
    
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    
