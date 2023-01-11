import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invokeendpointoutput as shared_invokeendpointoutput


@dataclasses.dataclass
class InvokeEndpointPathParams:
    endpoint_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EndpointName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InvokeEndpointHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_custom_attributes: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Custom-Attributes', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_inference_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Inference-Id', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_target_container_hostname: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Container-Hostname', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_target_model: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Model', 'style': 'simple', 'explode': False }})
    x_amzn_sage_maker_target_variant: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-SageMaker-Target-Variant', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class InvokeEndpointRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    

@dataclasses.dataclass
class InvokeEndpointRequest:
    headers: InvokeEndpointHeaders = dataclasses.field()
    path_params: InvokeEndpointPathParams = dataclasses.field()
    request: InvokeEndpointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InvokeEndpointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure: Optional[Any] = dataclasses.field(default=None)
    invoke_endpoint_output: Optional[shared_invokeendpointoutput.InvokeEndpointOutput] = dataclasses.field(default=None)
    model_error: Optional[Any] = dataclasses.field(default=None)
    service_unavailable: Optional[Any] = dataclasses.field(default=None)
    validation_error: Optional[Any] = dataclasses.field(default=None)
    
