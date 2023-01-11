import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aliasconfiguration as shared_aliasconfiguration


@dataclasses.dataclass
class CreateAliasPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAliasHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAliasRequestBodyRoutingConfig:
    r"""CreateAliasRequestBodyRoutingConfig
    The <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html\">traffic-shifting</a> configuration of a Lambda function alias.
    """
    
    additional_version_weights: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalVersionWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAliasRequestBody:
    function_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionVersion') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    routing_config: Optional[CreateAliasRequestBodyRoutingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingConfig') }})
    

@dataclasses.dataclass
class CreateAliasRequest:
    headers: CreateAliasHeaders = dataclasses.field()
    path_params: CreateAliasPathParams = dataclasses.field()
    request: CreateAliasRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    alias_configuration: Optional[shared_aliasconfiguration.AliasConfiguration] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
