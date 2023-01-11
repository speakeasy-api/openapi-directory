import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class ListArtifactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    list_artifacts_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
