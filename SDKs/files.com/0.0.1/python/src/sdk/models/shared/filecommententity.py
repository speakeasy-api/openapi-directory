import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filecommentreactionentity as shared_filecommentreactionentity


@dataclass_json
@dataclasses.dataclass
class FileCommentEntity:
    r"""FileCommentEntity
    List File Comments by path
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reactions: Optional[shared_filecommentreactionentity.FileCommentReactionEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
