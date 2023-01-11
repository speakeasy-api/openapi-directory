import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directory as shared_directory


@dataclass_json
@dataclasses.dataclass
class GetDirectoryResponse:
    directory: shared_directory.Directory = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Directory') }})
    
