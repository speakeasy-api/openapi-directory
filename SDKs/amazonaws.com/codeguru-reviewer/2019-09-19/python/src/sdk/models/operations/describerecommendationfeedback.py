import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describerecommendationfeedbackresponse as shared_describerecommendationfeedbackresponse


@dataclasses.dataclass
class DescribeRecommendationFeedbackPathParams:
    code_review_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CodeReviewArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRecommendationFeedbackQueryParams:
    recommendation_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'RecommendationId', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeRecommendationFeedbackHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeRecommendationFeedbackRequest:
    headers: DescribeRecommendationFeedbackHeaders = dataclasses.field()
    path_params: DescribeRecommendationFeedbackPathParams = dataclasses.field()
    query_params: DescribeRecommendationFeedbackQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeRecommendationFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_recommendation_feedback_response: Optional[shared_describerecommendationfeedbackresponse.DescribeRecommendationFeedbackResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
