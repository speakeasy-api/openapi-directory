import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codesigningconfig as shared_codesigningconfig


@dataclass_json
@dataclasses.dataclass
class ListCodeSigningConfigsResponse:
    code_signing_configs: Optional[list[shared_codesigningconfig.CodeSigningConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfigs') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
