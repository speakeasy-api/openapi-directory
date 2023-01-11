import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostTruststorePkcs12RequestBodyTruststoreP12:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    truststore_p12: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'truststore.p12' }})
    

@dataclasses.dataclass
class PostTruststorePkcs12RequestBody:
    truststore_p12: Optional[PostTruststorePkcs12RequestBodyTruststoreP12] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostTruststorePkcs12Request:
    request: Optional[PostTruststorePkcs12RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostTruststorePkcs12Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_truststore_pkcs12_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
