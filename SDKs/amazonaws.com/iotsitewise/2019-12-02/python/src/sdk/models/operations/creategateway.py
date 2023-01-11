import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import greengrass as shared_greengrass
from ..shared import greengrassv2 as shared_greengrassv2
from ..shared import creategatewayresponse as shared_creategatewayresponse


@dataclasses.dataclass
class CreateGatewayHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGatewayRequestBodyGatewayPlatform:
    r"""CreateGatewayRequestBodyGatewayPlatform
    Contains a gateway's platform information.
    """
    
    greengrass: Optional[shared_greengrass.Greengrass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrass') }})
    greengrass_v2: Optional[shared_greengrassv2.GreengrassV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassV2') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGatewayRequestBody:
    gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayName') }})
    gateway_platform: CreateGatewayRequestBodyGatewayPlatform = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayPlatform') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateGatewayRequest:
    headers: CreateGatewayHeaders = dataclasses.field()
    request: CreateGatewayRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGatewayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_gateway_response: Optional[shared_creategatewayresponse.CreateGatewayResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
