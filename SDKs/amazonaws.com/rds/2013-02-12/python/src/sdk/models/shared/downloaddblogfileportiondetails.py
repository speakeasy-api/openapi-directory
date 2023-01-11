import dataclasses
from typing import Optional


@dataclasses.dataclass
class DownloadDbLogFilePortionDetails:
    additional_data_pending: Optional[bool] = dataclasses.field(default=None)
    log_file_data: Optional[str] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
