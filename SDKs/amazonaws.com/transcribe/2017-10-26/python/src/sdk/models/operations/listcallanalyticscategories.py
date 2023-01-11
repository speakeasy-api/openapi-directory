import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcallanalyticscategoriesrequest as shared_listcallanalyticscategoriesrequest
from ..shared import listcallanalyticscategoriesresponse as shared_listcallanalyticscategoriesresponse


@dataclasses.dataclass
class ListCallAnalyticsCategoriesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCallAnalyticsCategoriesXAmzTargetEnum(str, Enum):
    TRANSCRIBE_LIST_CALL_ANALYTICS_CATEGORIES = "Transcribe.ListCallAnalyticsCategories"


@dataclasses.dataclass
class ListCallAnalyticsCategoriesHeaders:
    x_amz_target: ListCallAnalyticsCategoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCallAnalyticsCategoriesRequest:
    headers: ListCallAnalyticsCategoriesHeaders = dataclasses.field()
    query_params: ListCallAnalyticsCategoriesQueryParams = dataclasses.field()
    request: shared_listcallanalyticscategoriesrequest.ListCallAnalyticsCategoriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCallAnalyticsCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_call_analytics_categories_response: Optional[shared_listcallanalyticscategoriesresponse.ListCallAnalyticsCategoriesResponse] = dataclasses.field(default=None)
    
