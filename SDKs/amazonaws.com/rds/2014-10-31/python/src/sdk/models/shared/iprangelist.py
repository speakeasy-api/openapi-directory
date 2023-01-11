import dataclasses
from typing import Optional


@dataclasses.dataclass
class IPRangeList:
    r"""IPRangeList
     This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
    """
    
    cidrip: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
