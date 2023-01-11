import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class OrgsRemoveOutsideCollaboratorPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsRemoveOutsideCollaborator422ApplicationJSON:
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class OrgsRemoveOutsideCollaboratorRequest:
    path_params: OrgsRemoveOutsideCollaboratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsRemoveOutsideCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    orgs_remove_outside_collaborator_422_application_json_object: Optional[OrgsRemoveOutsideCollaborator422ApplicationJSON] = dataclasses.field(default=None)
    
