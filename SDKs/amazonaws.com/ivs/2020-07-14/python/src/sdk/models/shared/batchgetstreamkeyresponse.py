import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batcherror as shared_batcherror
from ..shared import streamkey as shared_streamkey


@dataclass_json
@dataclasses.dataclass
class BatchGetStreamKeyResponse:
    errors: Optional[list[shared_batcherror.BatchError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    stream_keys: Optional[list[shared_streamkey.StreamKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamKeys') }})
    
