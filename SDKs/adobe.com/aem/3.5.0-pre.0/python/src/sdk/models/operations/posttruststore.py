import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostTruststoreQueryParams:
    operation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    key_store_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyStoreType', 'style': 'form', 'explode': True }})
    new_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    re_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rePassword', 'style': 'form', 'explode': True }})
    remove_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'removeAlias', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostTruststoreRequestBodyCertificate:
    certificate: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'certificate' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class PostTruststoreRequestBody:
    certificate: Optional[PostTruststoreRequestBodyCertificate] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostTruststoreRequest:
    query_params: PostTruststoreQueryParams = dataclasses.field()
    request: Optional[PostTruststoreRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostTruststoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_truststore_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
