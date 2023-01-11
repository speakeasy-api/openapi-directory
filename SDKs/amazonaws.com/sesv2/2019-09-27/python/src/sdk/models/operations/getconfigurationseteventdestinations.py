import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getconfigurationseteventdestinationsresponse as shared_getconfigurationseteventdestinationsresponse


@dataclasses.dataclass
class GetConfigurationSetEventDestinationsPathParams:
    configuration_set_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigurationSetEventDestinationsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigurationSetEventDestinationsRequest:
    headers: GetConfigurationSetEventDestinationsHeaders = dataclasses.field()
    path_params: GetConfigurationSetEventDestinationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigurationSetEventDestinationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_configuration_set_event_destinations_response: Optional[shared_getconfigurationseteventdestinationsresponse.GetConfigurationSetEventDestinationsResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
