import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describeupdateresponse as shared_describeupdateresponse


@dataclasses.dataclass
class DescribeUpdatePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    update_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'updateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeUpdateQueryParams:
    addon_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'addonName', 'style': 'form', 'explode': True }})
    nodegroup_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nodegroupName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeUpdateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeUpdateRequest:
    headers: DescribeUpdateHeaders = dataclasses.field()
    path_params: DescribeUpdatePathParams = dataclasses.field()
    query_params: DescribeUpdateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    describe_update_response: Optional[shared_describeupdateresponse.DescribeUpdateResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
