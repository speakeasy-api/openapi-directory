import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getdataflowendpointgroupresponse as shared_getdataflowendpointgroupresponse


@dataclasses.dataclass
class GetDataflowEndpointGroupPathParams:
    dataflow_endpoint_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataflowEndpointGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataflowEndpointGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataflowEndpointGroupRequest:
    headers: GetDataflowEndpointGroupHeaders = dataclasses.field()
    path_params: GetDataflowEndpointGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataflowEndpointGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependency_exception: Optional[Any] = dataclasses.field(default=None)
    get_dataflow_endpoint_group_response: Optional[shared_getdataflowendpointgroupresponse.GetDataflowEndpointGroupResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
