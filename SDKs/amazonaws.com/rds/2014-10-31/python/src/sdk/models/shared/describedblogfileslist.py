import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeDbLogFilesList:
    r"""DescribeDbLogFilesList
    This data type is used as a response element to <code>DescribeDBLogFiles</code>.
    """
    
    last_written: Optional[int] = dataclasses.field(default=None)
    log_file_name: Optional[str] = dataclasses.field(default=None)
    size: Optional[int] = dataclasses.field(default=None)
    
