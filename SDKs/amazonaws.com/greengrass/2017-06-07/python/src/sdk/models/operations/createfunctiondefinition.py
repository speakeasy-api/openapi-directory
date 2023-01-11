import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functiondefaultconfig as shared_functiondefaultconfig
from ..shared import function as shared_function
from ..shared import createfunctiondefinitionresponse as shared_createfunctiondefinitionresponse


@dataclasses.dataclass
class CreateFunctionDefinitionHeaders:
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
class CreateFunctionDefinitionRequestBodyInitialVersion:
    r"""CreateFunctionDefinitionRequestBodyInitialVersion
    Information about a function definition version.
    """
    
    default_config: Optional[shared_functiondefaultconfig.FunctionDefaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    functions: Optional[list[shared_function.Function]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFunctionDefinitionRequestBody:
    initial_version: Optional[CreateFunctionDefinitionRequestBodyInitialVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateFunctionDefinitionRequest:
    headers: CreateFunctionDefinitionHeaders = dataclasses.field()
    request: CreateFunctionDefinitionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFunctionDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_function_definition_response: Optional[shared_createfunctiondefinitionresponse.CreateFunctionDefinitionResponse] = dataclasses.field(default=None)
    
