import dataclasses
from typing import Optional
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class ClusterParameterGroupDetails:
    r"""ClusterParameterGroupDetails
    Contains the output from the <a>DescribeClusterParameters</a> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    
