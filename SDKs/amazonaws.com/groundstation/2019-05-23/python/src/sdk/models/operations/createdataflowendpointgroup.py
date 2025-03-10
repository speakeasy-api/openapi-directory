"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import dataflowendpointgroupidresponse as shared_dataflowendpointgroupidresponse
from ..shared import endpointdetails as shared_endpointdetails
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateDataflowEndpointGroupRequestBody:
    
    endpoint_details: list[shared_endpointdetails.EndpointDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endpointDetails') }})
    r"""Endpoint details of each endpoint in the dataflow endpoint group."""  
    contact_post_pass_duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contactPostPassDurationSeconds'), 'exclude': lambda f: f is None }})
    r"""Amount of time, in seconds, after a contact ends for the contact to remain in a <code>POSTPASS</code> state. A CloudWatch event is emitted when the contact enters and exits the <code>POSTPASS</code> state."""  
    contact_pre_pass_duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contactPrePassDurationSeconds'), 'exclude': lambda f: f is None }})
    r"""Amount of time, in seconds, prior to contact start for the contact to remain in a <code>PREPASS</code> state. A CloudWatch event is emitted when the contact enters and exits the <code>PREPASS</code> state."""  
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})
    r"""Tags of a dataflow endpoint group."""  
    

@dataclasses.dataclass
class CreateDataflowEndpointGroupRequest:
    
    request_body: CreateDataflowEndpointGroupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateDataflowEndpointGroupResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    dataflow_endpoint_group_id_response: Optional[shared_dataflowendpointgroupidresponse.DataflowEndpointGroupIDResponse] = dataclasses.field(default=None)
    r"""Success"""  
    dependency_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DependencyException"""  
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    