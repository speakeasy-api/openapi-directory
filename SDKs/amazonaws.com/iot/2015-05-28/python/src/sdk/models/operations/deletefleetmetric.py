import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class DeleteFleetMetricPathParams:
    metric_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFleetMetricQueryParams:
    expected_version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteFleetMetricHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFleetMetricRequest:
    headers: DeleteFleetMetricHeaders = dataclasses.field()
    path_params: DeleteFleetMetricPathParams = dataclasses.field()
    query_params: DeleteFleetMetricQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFleetMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    version_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    
