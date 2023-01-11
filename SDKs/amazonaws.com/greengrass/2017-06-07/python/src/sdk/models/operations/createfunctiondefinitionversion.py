import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functiondefaultexecutionconfig as shared_functiondefaultexecutionconfig
from ..shared import function as shared_function
from ..shared import createfunctiondefinitionversionresponse as shared_createfunctiondefinitionversionresponse


@dataclasses.dataclass
class CreateFunctionDefinitionVersionPathParams:
    function_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFunctionDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFunctionDefinitionVersionRequestBodyDefaultConfig:
    r"""CreateFunctionDefinitionVersionRequestBodyDefaultConfig
    The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
    """
    
    execution: Optional[shared_functiondefaultexecutionconfig.FunctionDefaultExecutionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFunctionDefinitionVersionRequestBody:
    default_config: Optional[CreateFunctionDefinitionVersionRequestBodyDefaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    functions: Optional[list[shared_function.Function]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    

@dataclasses.dataclass
class CreateFunctionDefinitionVersionRequest:
    headers: CreateFunctionDefinitionVersionHeaders = dataclasses.field()
    path_params: CreateFunctionDefinitionVersionPathParams = dataclasses.field()
    request: CreateFunctionDefinitionVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFunctionDefinitionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_function_definition_version_response: Optional[shared_createfunctiondefinitionversionresponse.CreateFunctionDefinitionVersionResponse] = dataclasses.field(default=None)
    
