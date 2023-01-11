import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import invokeendpointasyncoutput as shared_invokeendpointasyncoutput


@dataclasses.dataclass
class InvokeEndpointAsyncPathParams:
    endpoint_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EndpointName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InvokeEndpointAsyncHeaders:
    x_amzn_sage_maker_input_location: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Amzn-SageMaker-InputLocation', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Accept', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_content_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Content-Type', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_custom_attributes: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Custom-Attributes', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_inference_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Inference-Id', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_request_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-RequestTTLSeconds', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InvokeEndpointAsyncRequest:
    headers: InvokeEndpointAsyncHeaders = dataclasses.field()
    path_params: InvokeEndpointAsyncPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InvokeEndpointAsyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure: Optional[Any] = dataclasses.field(default=None)
    invoke_endpoint_async_output: Optional[shared_invokeendpointasyncoutput.InvokeEndpointAsyncOutput] = dataclasses.field(default=None)
    service_unavailable: Optional[Any] = dataclasses.field(default=None)
    validation_error: Optional[Any] = dataclasses.field(default=None)
    
