import dataclasses
from typing import Optional
from ..shared import usermodel as shared_usermodel


@dataclasses.dataclass
class GetOrganizationMembersPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationMembersRequest:
    path_params: GetOrganizationMembersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_models: Optional[list[shared_usermodel.UserModel]] = dataclasses.field(default=None)
    
