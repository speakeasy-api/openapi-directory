import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAuthorizableKeystorePathParams:
    authorizable_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAuthorizableKeystoreRequest:
    path_params: GetAuthorizableKeystorePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorizableKeystoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keystore_info: Optional[str] = dataclasses.field(default=None)
    get_authorizable_keystore_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
