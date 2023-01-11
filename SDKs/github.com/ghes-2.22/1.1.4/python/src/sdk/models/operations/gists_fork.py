import dataclasses
from typing import Optional
from ..shared import base_gist as shared_base_gist
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GistsForkPathParams:
    gist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GistsForkRequest:
    path_params: GistsForkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsForkResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    base_gist: Optional[shared_base_gist.BaseGist] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
