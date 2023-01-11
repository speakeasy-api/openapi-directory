import dataclasses
from ..shared import group as shared_group


@dataclasses.dataclass
class CreateGroupResponse:
    r"""CreateGroupResponse
    Contains the response to a successful <a>CreateGroup</a> request. 
    """
    
    group: shared_group.Group = dataclasses.field()
    
