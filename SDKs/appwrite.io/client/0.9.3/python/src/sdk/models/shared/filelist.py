import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import file as shared_file


@dataclass_json
@dataclasses.dataclass
class FileList:
    r"""FileList
    Files List
    """
    
    files: list[shared_file.File] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
