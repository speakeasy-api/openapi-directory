import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeDbLogFilesList:
    last_written: Optional[int] = dataclasses.field(default=None)
    log_file_name: Optional[str] = dataclasses.field(default=None)
    size: Optional[int] = dataclasses.field(default=None)
    
