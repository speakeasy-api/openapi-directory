import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onfailure as shared_onfailure
from ..shared import onsuccess as shared_onsuccess
from ..shared import functioneventinvokeconfig as shared_functioneventinvokeconfig


@dataclasses.dataclass
class PutFunctionEventInvokeConfigPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutFunctionEventInvokeConfigQueryParams:
    qualifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutFunctionEventInvokeConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutFunctionEventInvokeConfigRequestBodyDestinationConfig:
    r"""PutFunctionEventInvokeConfigRequestBodyDestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[shared_onfailure.OnFailure] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[shared_onsuccess.OnSuccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    

@dataclass_json
@dataclasses.dataclass
class PutFunctionEventInvokeConfigRequestBody:
    destination_config: Optional[PutFunctionEventInvokeConfigRequestBodyDestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    maximum_event_age_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumEventAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    

@dataclasses.dataclass
class PutFunctionEventInvokeConfigRequest:
    headers: PutFunctionEventInvokeConfigHeaders = dataclasses.field()
    path_params: PutFunctionEventInvokeConfigPathParams = dataclasses.field()
    query_params: PutFunctionEventInvokeConfigQueryParams = dataclasses.field()
    request: PutFunctionEventInvokeConfigRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutFunctionEventInvokeConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    function_event_invoke_config: Optional[shared_functioneventinvokeconfig.FunctionEventInvokeConfig] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
