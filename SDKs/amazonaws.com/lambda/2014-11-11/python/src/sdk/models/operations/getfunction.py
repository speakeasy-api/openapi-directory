import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import getfunctionresponse as shared_getfunctionresponse
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import serviceexception as shared_serviceexception


@dataclasses.dataclass
class GetFunctionPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFunctionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFunctionRequest:
    headers: GetFunctionHeaders = dataclasses.field()
    path_params: GetFunctionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFunctionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_function_response: Optional[shared_getfunctionresponse.GetFunctionResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    service_exception: Optional[shared_serviceexception.ServiceException] = dataclasses.field(default=None)
    
