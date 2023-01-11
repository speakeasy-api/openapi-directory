import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controlmetadata as shared_controlmetadata


@dataclass_json
@dataclasses.dataclass
class ListControlsResponse:
    control_metadata_list: Optional[list[shared_controlmetadata.ControlMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlMetadataList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
