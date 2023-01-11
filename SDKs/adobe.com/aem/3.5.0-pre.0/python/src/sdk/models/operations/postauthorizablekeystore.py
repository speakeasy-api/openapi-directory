import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostAuthorizableKeystorePathParams:
    authorizable_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreQueryParams:
    operation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alias', 'style': 'form', 'explode': True }})
    current_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currentPassword', 'style': 'form', 'explode': True }})
    key_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyPassword', 'style': 'form', 'explode': True }})
    key_store_pass: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyStorePass', 'style': 'form', 'explode': True }})
    new_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newAlias', 'style': 'form', 'explode': True }})
    new_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    re_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rePassword', 'style': 'form', 'explode': True }})
    remove_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'removeAlias', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreRequestBodyCertChain:
    cert_chain: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'cert-chain' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreRequestBodyKeyStore:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    key_store: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'keyStore' }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreRequestBodyPk:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    pk: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'pk' }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreRequestBody:
    cert_chain: Optional[PostAuthorizableKeystoreRequestBodyCertChain] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    key_store: Optional[PostAuthorizableKeystoreRequestBodyKeyStore] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    pk: Optional[PostAuthorizableKeystoreRequestBodyPk] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreRequest:
    path_params: PostAuthorizableKeystorePathParams = dataclasses.field()
    query_params: PostAuthorizableKeystoreQueryParams = dataclasses.field()
    request: Optional[PostAuthorizableKeystoreRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAuthorizableKeystoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keystore_info: Optional[str] = dataclasses.field(default=None)
    post_authorizable_keystore_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
