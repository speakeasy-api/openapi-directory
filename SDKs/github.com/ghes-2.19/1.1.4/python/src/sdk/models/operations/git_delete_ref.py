import dataclasses
from typing import Optional
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitDeleteRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GitDeleteRefRequest:
    path_params: GitDeleteRefPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GitDeleteRefResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
