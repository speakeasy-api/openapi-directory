import dataclasses
from typing import Optional
from ..shared import validstorageoptionslist as shared_validstorageoptionslist


@dataclasses.dataclass
class ValidDbInstanceModificationsMessage:
    r"""ValidDbInstanceModificationsMessage
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. 
    """
    
    storage: Optional[list[shared_validstorageoptionslist.ValidStorageOptionsList]] = dataclasses.field(default=None)
    
