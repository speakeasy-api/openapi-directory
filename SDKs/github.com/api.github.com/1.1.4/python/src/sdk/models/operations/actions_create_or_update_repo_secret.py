import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsCreateOrUpdateRepoSecretPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsCreateOrUpdateRepoSecretRequestBody:
    encrypted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateRepoSecretRequest:
    path_params: ActionsCreateOrUpdateRepoSecretPathParams = dataclasses.field()
    request: Optional[ActionsCreateOrUpdateRepoSecretRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateRepoSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
