import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment as shared_comment
from ..shared import boardcommentpermissions as shared_boardcommentpermissions


@dataclass_json
@dataclasses.dataclass
class CommentsList:
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    permissions: Optional[shared_boardcommentpermissions.BoardCommentPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
