import dataclasses
from typing import Optional
from ..shared import doublerangelist as shared_doublerangelist
from ..shared import rangelist as shared_rangelist


@dataclasses.dataclass
class ValidStorageOptionsList:
    r"""ValidStorageOptionsList
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. 
    """
    
    iops_to_storage_ratio: Optional[list[shared_doublerangelist.DoubleRangeList]] = dataclasses.field(default=None)
    provisioned_iops: Optional[list[shared_rangelist.RangeList]] = dataclasses.field(default=None)
    storage_size: Optional[list[shared_rangelist.RangeList]] = dataclasses.field(default=None)
    storage_type: Optional[str] = dataclasses.field(default=None)
    supports_storage_autoscaling: Optional[bool] = dataclasses.field(default=None)
    
