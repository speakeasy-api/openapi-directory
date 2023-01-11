import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codesigningconfig as shared_codesigningconfig


@dataclass_json
@dataclasses.dataclass
class CreateCodeSigningConfigResponse:
    code_signing_config: shared_codesigningconfig.CodeSigningConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSigningConfig') }})
    
