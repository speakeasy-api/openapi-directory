import dataclasses
from typing import Optional


@dataclasses.dataclass
class ExportArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    airbyte_archive: Optional[bytes] = dataclasses.field(default=None)
    
