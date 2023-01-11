import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createvpcpeeringauthorizationinput as shared_createvpcpeeringauthorizationinput
from ..shared import createvpcpeeringauthorizationoutput as shared_createvpcpeeringauthorizationoutput

class CreateVpcPeeringAuthorizationXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_VPC_PEERING_AUTHORIZATION = "GameLift.CreateVpcPeeringAuthorization"


@dataclasses.dataclass
class CreateVpcPeeringAuthorizationHeaders:
    x_amz_target: CreateVpcPeeringAuthorizationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVpcPeeringAuthorizationRequest:
    headers: CreateVpcPeeringAuthorizationHeaders = dataclasses.field()
    request: shared_createvpcpeeringauthorizationinput.CreateVpcPeeringAuthorizationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVpcPeeringAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_vpc_peering_authorization_output: Optional[shared_createvpcpeeringauthorizationoutput.CreateVpcPeeringAuthorizationOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
