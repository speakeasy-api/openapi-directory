import dataclasses
from typing import Optional
from ..shared import importread as shared_importread


@dataclasses.dataclass
class ImportArchiveRequest:
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-gzip' }})
    

@dataclasses.dataclass
class ImportArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_read: Optional[shared_importread.ImportRead] = dataclasses.field(default=None)
    
