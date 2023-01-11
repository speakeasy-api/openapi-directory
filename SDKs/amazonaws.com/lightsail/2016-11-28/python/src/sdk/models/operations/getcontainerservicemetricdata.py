import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcontainerservicemetricdatarequest as shared_getcontainerservicemetricdatarequest
from ..shared import getcontainerservicemetricdataresult as shared_getcontainerservicemetricdataresult

class GetContainerServiceMetricDataXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_CONTAINER_SERVICE_METRIC_DATA = "Lightsail_20161128.GetContainerServiceMetricData"


@dataclasses.dataclass
class GetContainerServiceMetricDataHeaders:
    x_amz_target: GetContainerServiceMetricDataXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainerServiceMetricDataRequest:
    headers: GetContainerServiceMetricDataHeaders = dataclasses.field()
    request: shared_getcontainerservicemetricdatarequest.GetContainerServiceMetricDataRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetContainerServiceMetricDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_container_service_metric_data_result: Optional[shared_getcontainerservicemetricdataresult.GetContainerServiceMetricDataResult] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    unauthenticated_exception: Optional[Any] = dataclasses.field(default=None)
    
