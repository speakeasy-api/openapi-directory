import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import termsaggregation as shared_termsaggregation
from ..shared import getbucketsaggregationresponse as shared_getbucketsaggregationresponse


@dataclasses.dataclass
class GetBucketsAggregationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetBucketsAggregationRequestBodyBucketsAggregationType:
    r"""GetBucketsAggregationRequestBodyBucketsAggregationType
    The type of bucketed aggregation performed.
    """
    
    terms_aggregation: Optional[shared_termsaggregation.TermsAggregation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAggregation') }})
    

@dataclass_json
@dataclasses.dataclass
class GetBucketsAggregationRequestBody:
    aggregation_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationField') }})
    buckets_aggregation_type: GetBucketsAggregationRequestBodyBucketsAggregationType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketsAggregationType') }})
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    query_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    

@dataclasses.dataclass
class GetBucketsAggregationRequest:
    headers: GetBucketsAggregationHeaders = dataclasses.field()
    request: GetBucketsAggregationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetBucketsAggregationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_buckets_aggregation_response: Optional[shared_getbucketsaggregationresponse.GetBucketsAggregationResponse] = dataclasses.field(default=None)
    index_not_ready_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_aggregation_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_query_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
