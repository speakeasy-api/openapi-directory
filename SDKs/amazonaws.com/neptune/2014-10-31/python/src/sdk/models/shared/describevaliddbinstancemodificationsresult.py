import dataclasses
from typing import Optional
from ..shared import validdbinstancemodificationsmessage as shared_validdbinstancemodificationsmessage


@dataclasses.dataclass
class DescribeValidDbInstanceModificationsResult:
    valid_db_instance_modifications_message: Optional[shared_validdbinstancemodificationsmessage.ValidDbInstanceModificationsMessage] = dataclasses.field(default=None)
    
