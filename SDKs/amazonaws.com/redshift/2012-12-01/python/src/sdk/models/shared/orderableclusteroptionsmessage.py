import dataclasses
from typing import Optional
from ..shared import orderableclusteroptionslist as shared_orderableclusteroptionslist


@dataclasses.dataclass
class OrderableClusterOptionsMessage:
    r"""OrderableClusterOptionsMessage
    Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    orderable_cluster_options: Optional[list[shared_orderableclusteroptionslist.OrderableClusterOptionsList]] = dataclasses.field(default=None)
    
