import dataclasses
from typing import Optional


@dataclasses.dataclass
class SourceRegionList:
    r"""SourceRegionList
    Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.
    """
    
    endpoint: Optional[str] = dataclasses.field(default=None)
    region_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    supports_db_instance_automated_backups_replication: Optional[bool] = dataclasses.field(default=None)
    
