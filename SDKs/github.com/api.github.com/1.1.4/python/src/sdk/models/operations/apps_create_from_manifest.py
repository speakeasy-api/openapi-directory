import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class AppsCreateFromManifestPathParams:
    code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsCreateFromManifestRequest:
    path_params: AppsCreateFromManifestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsCreateFromManifestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    git_hub_app: Optional[dict[str, Any]] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
