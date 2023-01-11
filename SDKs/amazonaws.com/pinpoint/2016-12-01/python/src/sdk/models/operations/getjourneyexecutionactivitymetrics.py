import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getjourneyexecutionactivitymetricsresponse as shared_getjourneyexecutionactivitymetricsresponse


@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    journey_activity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'journey-activity-id', 'style': 'simple', 'explode': False }})
    journey_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'journey-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next-token', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page-size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsRequest:
    headers: GetJourneyExecutionActivityMetricsHeaders = dataclasses.field()
    path_params: GetJourneyExecutionActivityMetricsPathParams = dataclasses.field()
    query_params: GetJourneyExecutionActivityMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetJourneyExecutionActivityMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    get_journey_execution_activity_metrics_response: Optional[shared_getjourneyexecutionactivitymetricsresponse.GetJourneyExecutionActivityMetricsResponse] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
