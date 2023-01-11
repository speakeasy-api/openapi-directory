import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentdependencyrequirement as shared_componentdependencyrequirement
from ..shared import lambdaexecutionparameters as shared_lambdaexecutionparameters
from ..shared import componentplatform as shared_componentplatform
from ..shared import createcomponentversionresponse as shared_createcomponentversionresponse


@dataclasses.dataclass
class CreateComponentVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateComponentVersionRequestBodyLambdaFunction:
    r"""CreateComponentVersionRequestBodyLambdaFunction
    Contains information about an Lambda function to import to create a component.
    """
    
    component_dependencies: Optional[dict[str, shared_componentdependencyrequirement.ComponentDependencyRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentDependencies') }})
    component_lambda_parameters: Optional[shared_lambdaexecutionparameters.LambdaExecutionParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentLambdaParameters') }})
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_platforms: Optional[list[shared_componentplatform.ComponentPlatform]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentPlatforms') }})
    component_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    lambda_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaArn') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateComponentVersionRequestBody:
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    inline_recipe: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineRecipe') }})
    lambda_function: Optional[CreateComponentVersionRequestBodyLambdaFunction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunction') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateComponentVersionRequest:
    headers: CreateComponentVersionHeaders = dataclasses.field()
    request: CreateComponentVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateComponentVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_component_version_response: Optional[shared_createcomponentversionresponse.CreateComponentVersionResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    request_already_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
