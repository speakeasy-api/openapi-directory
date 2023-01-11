import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class ImportDataRequest:
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclasses.dataclass
class ImportDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
