import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getintegrationresponseresponse as shared_getintegrationresponseresponse


@dataclasses.dataclass
class GetIntegrationResponsePathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    integration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    integration_response_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'integrationResponseId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationResponseHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntegrationResponseRequest:
    headers: GetIntegrationResponseHeaders = dataclasses.field()
    path_params: GetIntegrationResponsePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationResponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_integration_response_response: Optional[shared_getintegrationresponseresponse.GetIntegrationResponseResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
