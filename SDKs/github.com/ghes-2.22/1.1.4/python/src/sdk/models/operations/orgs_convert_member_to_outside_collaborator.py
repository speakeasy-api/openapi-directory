import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorRequest:
    path_params: OrgsConvertMemberToOutsideCollaboratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    orgs_convert_member_to_outside_collaborator_202_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
