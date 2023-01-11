import dataclasses
from typing import Optional
from ..shared import validstorageoptionslist as shared_validstorageoptionslist
from ..shared import availableprocessorfeaturelist as shared_availableprocessorfeaturelist


@dataclasses.dataclass
class ValidDbInstanceModificationsMessage:
    r"""ValidDbInstanceModificationsMessage
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. 
    """
    
    storage: Optional[list[shared_validstorageoptionslist.ValidStorageOptionsList]] = dataclasses.field(default=None)
    valid_processor_features: Optional[list[shared_availableprocessorfeaturelist.AvailableProcessorFeatureList]] = dataclasses.field(default=None)
    
