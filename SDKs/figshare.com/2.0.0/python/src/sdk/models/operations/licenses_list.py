import dataclasses
from typing import Optional
from ..shared import license as shared_license


@dataclasses.dataclass
class LicensesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    licenses: Optional[list[shared_license.License]] = dataclasses.field(default=None)
    
