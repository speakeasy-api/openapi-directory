import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import organization_full as shared_organization_full


@dataclasses.dataclass
class OrgsGetPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsGetRequest:
    path_params: OrgsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    organization_full: Optional[shared_organization_full.OrganizationFull] = dataclasses.field(default=None)
    
