import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteFileEntry:
    r"""DeleteFileEntry
    A file that is deleted as part of a commit.
    """
    
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    
