import dataclasses



@dataclasses.dataclass
class DeleteOrganizationMemberPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationMemberRequest:
    path_params: DeleteOrganizationMemberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
