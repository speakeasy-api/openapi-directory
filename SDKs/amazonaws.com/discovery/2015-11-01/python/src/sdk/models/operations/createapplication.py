import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createapplicationrequest as shared_createapplicationrequest
from ..shared import createapplicationresponse as shared_createapplicationresponse

class CreateApplicationXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_CREATE_APPLICATION = "AWSPoseidonService_V2015_11_01.CreateApplication"


@dataclasses.dataclass
class CreateApplicationHeaders:
    x_amz_target: CreateApplicationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateApplicationRequest:
    headers: CreateApplicationHeaders = dataclasses.field()
    request: shared_createapplicationrequest.CreateApplicationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization_error_exception: Optional[Any] = dataclasses.field(default=None)
    create_application_response: Optional[shared_createapplicationresponse.CreateApplicationResponse] = dataclasses.field(default=None)
    home_region_not_set_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
