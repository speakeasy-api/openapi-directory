import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listrecommendationfeedbackresponse as shared_listrecommendationfeedbackresponse


@dataclasses.dataclass
class ListRecommendationFeedbackPathParams:
    code_review_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CodeReviewArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRecommendationFeedbackQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    recommendation_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RecommendationIds', 'style': 'form', 'explode': True }})
    user_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UserIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRecommendationFeedbackHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRecommendationFeedbackRequest:
    headers: ListRecommendationFeedbackHeaders = dataclasses.field()
    path_params: ListRecommendationFeedbackPathParams = dataclasses.field()
    query_params: ListRecommendationFeedbackQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListRecommendationFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_recommendation_feedback_response: Optional[shared_listrecommendationfeedbackresponse.ListRecommendationFeedbackResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
