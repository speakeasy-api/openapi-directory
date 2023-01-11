import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streaminfo as shared_streaminfo


@dataclass_json
@dataclasses.dataclass
class DescribeStreamResponse:
    stream_info: Optional[shared_streaminfo.StreamInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamInfo') }})
    
