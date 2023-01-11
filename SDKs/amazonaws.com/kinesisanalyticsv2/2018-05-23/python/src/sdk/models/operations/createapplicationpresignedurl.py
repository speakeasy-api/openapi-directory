import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createapplicationpresignedurlrequest as shared_createapplicationpresignedurlrequest
from ..shared import createapplicationpresignedurlresponse as shared_createapplicationpresignedurlresponse

class CreateApplicationPresignedURLXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_CREATE_APPLICATION_PRESIGNED_URL = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"


@dataclasses.dataclass
class CreateApplicationPresignedURLHeaders:
    x_amz_target: CreateApplicationPresignedURLXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateApplicationPresignedURLRequest:
    headers: CreateApplicationPresignedURLHeaders = dataclasses.field()
    request: shared_createapplicationpresignedurlrequest.CreateApplicationPresignedURLRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationPresignedURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_application_presigned_url_response: Optional[shared_createapplicationpresignedurlresponse.CreateApplicationPresignedURLResponse] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
