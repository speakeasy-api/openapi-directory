import dataclasses
from typing import Optional
from ..shared import key as shared_key


@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams:
    fingerprint: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyFingerprintPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyFingerprintResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    key: Optional[shared_key.Key] = dataclasses.field(default=None)
    
