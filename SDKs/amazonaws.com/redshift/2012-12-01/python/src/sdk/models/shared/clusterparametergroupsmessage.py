import dataclasses
from typing import Optional
from ..shared import parametergrouplist as shared_parametergrouplist


@dataclasses.dataclass
class ClusterParameterGroupsMessage:
    r"""ClusterParameterGroupsMessage
    Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    parameter_groups: Optional[list[shared_parametergrouplist.ParameterGroupList]] = dataclasses.field(default=None)
    
