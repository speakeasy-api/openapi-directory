import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclasses.dataclass
class ReposTransferPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposTransferRequestBody:
    new_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_owner') }})
    team_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_ids') }})
    

@dataclasses.dataclass
class ReposTransferRequest:
    path_params: ReposTransferPathParams = dataclasses.field()
    request: Optional[ReposTransferRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository: Optional[shared_repository.Repository] = dataclasses.field(default=None)
    
