import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainnameconfiguration as shared_domainnameconfiguration
from ..shared import updatedomainnameresponse as shared_updatedomainnameresponse


@dataclasses.dataclass
class UpdateDomainNamePathParams:
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDomainNameHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDomainNameRequestBodyMutualTLSAuthentication:
    r"""UpdateDomainNameRequestBodyMutualTLSAuthentication
    The mutual TLS authentication configuration for a custom domain name.
    """
    
    truststore_uri: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreUri') }})
    truststore_version: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDomainNameRequestBody:
    domain_name_configurations: Optional[list[shared_domainnameconfiguration.DomainNameConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNameConfigurations') }})
    mutual_tls_authentication: Optional[UpdateDomainNameRequestBodyMutualTLSAuthentication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutualTlsAuthentication') }})
    

@dataclasses.dataclass
class UpdateDomainNameRequest:
    headers: UpdateDomainNameHeaders = dataclasses.field()
    path_params: UpdateDomainNamePathParams = dataclasses.field()
    request: UpdateDomainNameRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDomainNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_domain_name_response: Optional[shared_updatedomainnameresponse.UpdateDomainNameResponse] = dataclasses.field(default=None)
    
