import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class GistsCheckIsStarredPathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsCheckIsStarredRequest:
    path_params: GistsCheckIsStarredPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsCheckIsStarredResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gists_check_is_starred_404_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
