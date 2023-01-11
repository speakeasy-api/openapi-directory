import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class ParameterGroupList:
    r"""ParameterGroupList
    Describes a parameter group.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    parameter_group_family: Optional[str] = dataclasses.field(default=None)
    parameter_group_name: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
