import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsCreateOrUpdateEnvironmentSecretPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequestBody:
    encrypted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequest:
    path_params: ActionsCreateOrUpdateEnvironmentSecretPathParams = dataclasses.field()
    request: Optional[ActionsCreateOrUpdateEnvironmentSecretRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateEnvironmentSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
