import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getdevicedefinitionversionresponse as shared_getdevicedefinitionversionresponse


@dataclasses.dataclass
class GetDeviceDefinitionVersionPathParams:
    device_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DeviceDefinitionId', 'style': 'simple', 'explode': False }})
    device_definition_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DeviceDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceDefinitionVersionQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceDefinitionVersionRequest:
    headers: GetDeviceDefinitionVersionHeaders = dataclasses.field()
    path_params: GetDeviceDefinitionVersionPathParams = dataclasses.field()
    query_params: GetDeviceDefinitionVersionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceDefinitionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_device_definition_version_response: Optional[shared_getdevicedefinitionversionresponse.GetDeviceDefinitionVersionResponse] = dataclasses.field(default=None)
    
