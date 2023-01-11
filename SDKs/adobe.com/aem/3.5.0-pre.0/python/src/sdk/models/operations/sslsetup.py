import dataclasses
from typing import Optional


@dataclasses.dataclass
class SslSetupQueryParams:
    https_hostname: str = dataclasses.field(metadata={'query_param': { 'field_name': 'httpsHostname', 'style': 'form', 'explode': True }})
    https_port: str = dataclasses.field(metadata={'query_param': { 'field_name': 'httpsPort', 'style': 'form', 'explode': True }})
    keystore_password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keystorePassword', 'style': 'form', 'explode': True }})
    keystore_password_confirm: str = dataclasses.field(metadata={'query_param': { 'field_name': 'keystorePasswordConfirm', 'style': 'form', 'explode': True }})
    truststore_password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'truststorePassword', 'style': 'form', 'explode': True }})
    truststore_password_confirm: str = dataclasses.field(metadata={'query_param': { 'field_name': 'truststorePasswordConfirm', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SslSetupRequestBodyCertificateFile:
    certificate_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'certificateFile' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class SslSetupRequestBodyPrivatekeyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    privatekey_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'privatekeyFile' }})
    

@dataclasses.dataclass
class SslSetupRequestBody:
    certificate_file: Optional[SslSetupRequestBodyCertificateFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    privatekey_file: Optional[SslSetupRequestBodyPrivatekeyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class SslSetupRequest:
    query_params: SslSetupQueryParams = dataclasses.field()
    request: Optional[SslSetupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SslSetupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssl_setup_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
