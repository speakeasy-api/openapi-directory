import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import file as shared_file
from ..shared import folder as shared_folder
from ..shared import submodule as shared_submodule
from ..shared import symboliclink as shared_symboliclink


@dataclass_json
@dataclasses.dataclass
class GetFolderOutput:
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    folder_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderPath') }})
    files: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    sub_folders: Optional[list[shared_folder.Folder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subFolders') }})
    sub_modules: Optional[list[shared_submodule.SubModule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subModules') }})
    symbolic_links: Optional[list[shared_symboliclink.SymbolicLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbolicLinks') }})
    tree_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
