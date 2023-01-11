import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetKeystorePathParams:
    authorizable_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetKeystoreRequest:
    path_params: GetKeystorePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetKeystoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_keystore_default_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
