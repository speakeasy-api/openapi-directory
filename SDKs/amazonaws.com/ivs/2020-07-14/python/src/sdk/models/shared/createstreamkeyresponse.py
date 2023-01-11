import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamkey as shared_streamkey


@dataclass_json
@dataclasses.dataclass
class CreateStreamKeyResponse:
    stream_key: Optional[shared_streamkey.StreamKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamKey') }})
    
