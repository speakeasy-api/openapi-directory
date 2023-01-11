import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import functionconfiguration as shared_functionconfiguration
from ..shared import invalidparametervalueexception as shared_invalidparametervalueexception
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import serviceexception as shared_serviceexception


@dataclasses.dataclass
class UpdateFunctionConfigurationPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFunctionConfigurationQueryParams:
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    handler: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Handler', 'style': 'form', 'explode': True }})
    memory_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MemorySize', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Timeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateFunctionConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFunctionConfigurationRequest:
    headers: UpdateFunctionConfigurationHeaders = dataclasses.field()
    path_params: UpdateFunctionConfigurationPathParams = dataclasses.field()
    query_params: UpdateFunctionConfigurationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateFunctionConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function_configuration: Optional[shared_functionconfiguration.FunctionConfiguration] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[shared_invalidparametervalueexception.InvalidParameterValueException] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    service_exception: Optional[shared_serviceexception.ServiceException] = dataclasses.field(default=None)
    
