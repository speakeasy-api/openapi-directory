import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mergehunkdetail as shared_mergehunkdetail


@dataclass_json
@dataclasses.dataclass
class MergeHunk:
    r"""MergeHunk
    Information about merge hunks in a merge or pull request operation.
    """
    
    base: Optional[shared_mergehunkdetail.MergeHunkDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[shared_mergehunkdetail.MergeHunkDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    is_conflict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isConflict') }})
    source: Optional[shared_mergehunkdetail.MergeHunkDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
