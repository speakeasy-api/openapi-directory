import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import quality_enum as shared_quality_enum
from ..shared import getassetpropertyvaluehistoryresponse as shared_getassetpropertyvaluehistoryresponse

class GetAssetPropertyValueHistoryTimeOrderingEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclasses.dataclass
class GetAssetPropertyValueHistoryQueryParams:
    asset_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assetId', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    property_alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'propertyAlias', 'style': 'form', 'explode': True }})
    property_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'propertyId', 'style': 'form', 'explode': True }})
    qualities: Optional[list[shared_quality_enum.QualityEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'qualities', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    time_ordering: Optional[GetAssetPropertyValueHistoryTimeOrderingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeOrdering', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssetPropertyValueHistoryHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetPropertyValueHistoryRequest:
    headers: GetAssetPropertyValueHistoryHeaders = dataclasses.field()
    query_params: GetAssetPropertyValueHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetPropertyValueHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_asset_property_value_history_response: Optional[shared_getassetpropertyvaluehistoryresponse.GetAssetPropertyValueHistoryResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
