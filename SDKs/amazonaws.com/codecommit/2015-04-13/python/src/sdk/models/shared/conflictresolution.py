import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deletefileentry as shared_deletefileentry
from ..shared import replacecontententry as shared_replacecontententry
from ..shared import setfilemodeentry as shared_setfilemodeentry


@dataclass_json
@dataclasses.dataclass
class ConflictResolution:
    r"""ConflictResolution
    If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
    """
    
    delete_files: Optional[list[shared_deletefileentry.DeleteFileEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFiles') }})
    replace_contents: Optional[list[shared_replacecontententry.ReplaceContentEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceContents') }})
    set_file_modes: Optional[list[shared_setfilemodeentry.SetFileModeEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setFileModes') }})
    
