import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channel as shared_channel
from ..shared import batcherror as shared_batcherror


@dataclass_json
@dataclasses.dataclass
class BatchGetChannelResponse:
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    errors: Optional[list[shared_batcherror.BatchError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
