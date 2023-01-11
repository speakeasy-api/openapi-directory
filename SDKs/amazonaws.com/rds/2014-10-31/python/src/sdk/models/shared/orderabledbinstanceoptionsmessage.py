import dataclasses
from typing import Optional
from ..shared import orderabledbinstanceoptionslist as shared_orderabledbinstanceoptionslist


@dataclasses.dataclass
class OrderableDbInstanceOptionsMessage:
    r"""OrderableDbInstanceOptionsMessage
     Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    orderable_db_instance_options: Optional[list[shared_orderabledbinstanceoptionslist.OrderableDbInstanceOptionsList]] = dataclasses.field(default=None)
    
