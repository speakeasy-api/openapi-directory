import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import tlssecuritypolicy_enum as shared_tlssecuritypolicy_enum

class GetUpdateDomainEndpointOptionsActionEnum(str, Enum):
    UPDATE_DOMAIN_ENDPOINT_OPTIONS = "UpdateDomainEndpointOptions"


@dataclasses.dataclass
class GetUpdateDomainEndpointOptionsDomainEndpointOptions:
    r"""GetUpdateDomainEndpointOptionsDomainEndpointOptions
    The domain's endpoint options.
    """
    
    enforce_https: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnforceHTTPS' }})
    tls_security_policy: Optional[shared_tlssecuritypolicy_enum.TLSSecurityPolicyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TLSSecurityPolicy' }})
    
class GetUpdateDomainEndpointOptionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclasses.dataclass
class GetUpdateDomainEndpointOptionsQueryParams:
    action: GetUpdateDomainEndpointOptionsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_endpoint_options: GetUpdateDomainEndpointOptionsDomainEndpointOptions = dataclasses.field(metadata={'query_param': { 'field_name': 'DomainEndpointOptions', 'style': 'form', 'explode': True }})
    domain_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    version: GetUpdateDomainEndpointOptionsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateDomainEndpointOptionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUpdateDomainEndpointOptionsRequest:
    headers: GetUpdateDomainEndpointOptionsHeaders = dataclasses.field()
    query_params: GetUpdateDomainEndpointOptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateDomainEndpointOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
