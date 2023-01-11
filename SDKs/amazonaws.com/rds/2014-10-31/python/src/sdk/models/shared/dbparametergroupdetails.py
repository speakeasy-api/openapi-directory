import dataclasses
from typing import Optional
from ..shared import parameterslist as shared_parameterslist


@dataclasses.dataclass
class DbParameterGroupDetails:
    r"""DbParameterGroupDetails
     Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    parameters: Optional[list[shared_parameterslist.ParametersList]] = dataclasses.field(default=None)
    
