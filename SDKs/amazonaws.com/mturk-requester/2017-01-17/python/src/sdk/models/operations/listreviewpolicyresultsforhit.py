import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listreviewpolicyresultsforhitrequest as shared_listreviewpolicyresultsforhitrequest
from ..shared import listreviewpolicyresultsforhitresponse as shared_listreviewpolicyresultsforhitresponse


@dataclasses.dataclass
class ListReviewPolicyResultsForHitQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListReviewPolicyResultsForHitxAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEW_POLICY_RESULTS_FOR_HIT = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"


@dataclasses.dataclass
class ListReviewPolicyResultsForHitHeaders:
    x_amz_target: ListReviewPolicyResultsForHitxAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListReviewPolicyResultsForHitRequest:
    headers: ListReviewPolicyResultsForHitHeaders = dataclasses.field()
    query_params: ListReviewPolicyResultsForHitQueryParams = dataclasses.field()
    request: shared_listreviewpolicyresultsforhitrequest.ListReviewPolicyResultsForHitRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListReviewPolicyResultsForHitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_review_policy_results_for_hit_response: Optional[shared_listreviewpolicyresultsforhitresponse.ListReviewPolicyResultsForHitResponse] = dataclasses.field(default=None)
    request_error: Optional[Any] = dataclasses.field(default=None)
    service_fault: Optional[Any] = dataclasses.field(default=None)
    
