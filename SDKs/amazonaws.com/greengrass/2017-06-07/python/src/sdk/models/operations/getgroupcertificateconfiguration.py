import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getgroupcertificateconfigurationresponse as shared_getgroupcertificateconfigurationresponse


@dataclasses.dataclass
class GetGroupCertificateConfigurationPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupCertificateConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupCertificateConfigurationRequest:
    headers: GetGroupCertificateConfigurationHeaders = dataclasses.field()
    path_params: GetGroupCertificateConfigurationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupCertificateConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_group_certificate_configuration_response: Optional[shared_getgroupcertificateconfigurationresponse.GetGroupCertificateConfigurationResponse] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    
