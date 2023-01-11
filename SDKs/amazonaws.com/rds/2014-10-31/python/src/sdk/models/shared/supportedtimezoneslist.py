import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedTimezonesList:
    r"""SupportedTimezonesList
    A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions. 
    """
    
    timezone_name: Optional[str] = dataclasses.field(default=None)
    
