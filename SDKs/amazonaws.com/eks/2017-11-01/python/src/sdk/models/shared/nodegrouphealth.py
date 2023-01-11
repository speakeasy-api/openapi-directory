import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issue as shared_issue


@dataclass_json
@dataclasses.dataclass
class NodegroupHealth:
    r"""NodegroupHealth
    An object representing the health status of the node group.
    """
    
    issues: Optional[list[shared_issue.Issue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
