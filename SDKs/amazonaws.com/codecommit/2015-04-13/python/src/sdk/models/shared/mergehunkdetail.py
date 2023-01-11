import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MergeHunkDetail:
    r"""MergeHunkDetail
    Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
    """
    
    end_line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endLine') }})
    hunk_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hunkContent') }})
    start_line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startLine') }})
    
