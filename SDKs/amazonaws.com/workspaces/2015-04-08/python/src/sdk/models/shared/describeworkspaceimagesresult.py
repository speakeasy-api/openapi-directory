import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceimage as shared_workspaceimage


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspaceImagesResult:
    images: Optional[list[shared_workspaceimage.WorkspaceImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Images') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
