import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteFileOutput:
    blob_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    tree_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
