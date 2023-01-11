import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdimensionkeydetailsrequest as shared_getdimensionkeydetailsrequest
from ..shared import getdimensionkeydetailsresponse as shared_getdimensionkeydetailsresponse

class GetDimensionKeyDetailsXAmzTargetEnum(str, Enum):
    PERFORMANCE_INSIGHTSV20180227_GET_DIMENSION_KEY_DETAILS = "PerformanceInsightsv20180227.GetDimensionKeyDetails"


@dataclasses.dataclass
class GetDimensionKeyDetailsHeaders:
    x_amz_target: GetDimensionKeyDetailsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDimensionKeyDetailsRequest:
    headers: GetDimensionKeyDetailsHeaders = dataclasses.field()
    request: shared_getdimensionkeydetailsrequest.GetDimensionKeyDetailsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDimensionKeyDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_dimension_key_details_response: Optional[shared_getdimensionkeydetailsresponse.GetDimensionKeyDetailsResponse] = dataclasses.field(default=None)
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    
