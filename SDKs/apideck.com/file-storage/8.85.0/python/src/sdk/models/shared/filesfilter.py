import dataclasses
from typing import Optional


@dataclasses.dataclass
class FilesFilter:
    drive_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drive_id' }})
    folder_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'folder_id' }})
    shared: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shared' }})
    
