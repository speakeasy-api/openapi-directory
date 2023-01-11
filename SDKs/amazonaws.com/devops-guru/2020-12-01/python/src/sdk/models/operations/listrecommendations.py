import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listrecommendationsresponse as shared_listrecommendationsresponse


@dataclasses.dataclass
class ListRecommendationsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRecommendationsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ListRecommendationsRequestBodyLocaleEnum(str, Enum):
    DE_DE = "DE_DE"
    EN_US = "EN_US"
    EN_GB = "EN_GB"
    ES_ES = "ES_ES"
    FR_FR = "FR_FR"
    IT_IT = "IT_IT"
    JA_JP = "JA_JP"
    KO_KR = "KO_KR"
    PT_BR = "PT_BR"
    ZH_CN = "ZH_CN"
    ZH_TW = "ZH_TW"


@dataclass_json
@dataclasses.dataclass
class ListRecommendationsRequestBody:
    insight_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightId') }})
    locale: Optional[ListRecommendationsRequestBodyLocaleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locale') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

@dataclasses.dataclass
class ListRecommendationsRequest:
    headers: ListRecommendationsHeaders = dataclasses.field()
    query_params: ListRecommendationsQueryParams = dataclasses.field()
    request: ListRecommendationsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRecommendationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_recommendations_response: Optional[shared_listrecommendationsresponse.ListRecommendationsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
