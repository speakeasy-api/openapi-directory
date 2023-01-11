import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import repository as shared_repository
from ..shared import scim_error as shared_scim_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateForkPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposCreateForkQueryParams:
    org: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'org', 'style': 'form', 'explode': True }})
    organization: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'organization', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateForkRequestBody:
    organization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    

@dataclasses.dataclass
class ReposCreateForkRequest:
    path_params: ReposCreateForkPathParams = dataclasses.field()
    query_params: ReposCreateForkQueryParams = dataclasses.field()
    request: Optional[ReposCreateForkRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateForkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repository: Optional[shared_repository.Repository] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
