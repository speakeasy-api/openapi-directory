import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describedetectorresponse as shared_describedetectorresponse


@dataclasses.dataclass
class DescribeDetectorPathParams:
    detector_model_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'detectorModelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeDetectorQueryParams:
    key_value: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyValue', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeDetectorHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeDetectorRequest:
    headers: DescribeDetectorHeaders = dataclasses.field()
    path_params: DescribeDetectorPathParams = dataclasses.field()
    query_params: DescribeDetectorQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeDetectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_detector_response: Optional[shared_describedetectorresponse.DescribeDetectorResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
