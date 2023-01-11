import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getinterpolatedassetpropertyvaluesresponse as shared_getinterpolatedassetpropertyvaluesresponse

class GetInterpolatedAssetPropertyValuesQualityEnum(str, Enum):
    GOOD = "GOOD"
    BAD = "BAD"
    UNCERTAIN = "UNCERTAIN"


@dataclasses.dataclass
class GetInterpolatedAssetPropertyValuesQueryParams:
    end_time_in_seconds: int = dataclasses.field(metadata={'query_param': { 'field_name': 'endTimeInSeconds', 'style': 'form', 'explode': True }})
    interval_in_seconds: int = dataclasses.field(metadata={'query_param': { 'field_name': 'intervalInSeconds', 'style': 'form', 'explode': True }})
    quality: GetInterpolatedAssetPropertyValuesQualityEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    start_time_in_seconds: int = dataclasses.field(metadata={'query_param': { 'field_name': 'startTimeInSeconds', 'style': 'form', 'explode': True }})
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assetId', 'style': 'form', 'explode': True }})
    end_time_offset_in_nanos: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTimeOffsetInNanos', 'style': 'form', 'explode': True }})
    interval_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'intervalWindowInSeconds', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    property_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'propertyAlias', 'style': 'form', 'explode': True }})
    property_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'propertyId', 'style': 'form', 'explode': True }})
    start_time_offset_in_nanos: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTimeOffsetInNanos', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInterpolatedAssetPropertyValuesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInterpolatedAssetPropertyValuesRequest:
    headers: GetInterpolatedAssetPropertyValuesHeaders = dataclasses.field()
    query_params: GetInterpolatedAssetPropertyValuesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInterpolatedAssetPropertyValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_interpolated_asset_property_values_response: Optional[shared_getinterpolatedassetpropertyvaluesresponse.GetInterpolatedAssetPropertyValuesResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
