import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaborator403ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorRequest:
    path_params: OrgsConvertMemberToOutsideCollaboratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsConvertMemberToOutsideCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    orgs_convert_member_to_outside_collaborator_403_application_json_object: Optional[OrgsConvertMemberToOutsideCollaborator403ApplicationJSON] = dataclasses.field(default=None)
    
