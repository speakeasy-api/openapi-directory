import dataclasses
from typing import Optional
from ..shared import describedblogfileslist as shared_describedblogfileslist


@dataclasses.dataclass
class DescribeDbLogFilesResponse:
    describe_db_log_files: Optional[list[shared_describedblogfileslist.DescribeDbLogFilesList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
