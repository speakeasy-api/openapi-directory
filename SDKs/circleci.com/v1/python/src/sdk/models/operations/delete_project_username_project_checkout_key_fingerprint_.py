import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclasses.dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_project_username_project_checkout_key_fingerprint_200_application_json_object: Optional[DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON] = dataclasses.field(default=None)
    
