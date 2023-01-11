import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class ExportDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    file_content: Optional[bytes] = dataclasses.field(default=None)
    
