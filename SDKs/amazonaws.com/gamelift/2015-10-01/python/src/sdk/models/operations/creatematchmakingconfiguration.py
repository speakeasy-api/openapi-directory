import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import creatematchmakingconfigurationinput as shared_creatematchmakingconfigurationinput
from ..shared import creatematchmakingconfigurationoutput as shared_creatematchmakingconfigurationoutput

class CreateMatchmakingConfigurationXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_MATCHMAKING_CONFIGURATION = "GameLift.CreateMatchmakingConfiguration"


@dataclasses.dataclass
class CreateMatchmakingConfigurationHeaders:
    x_amz_target: CreateMatchmakingConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMatchmakingConfigurationRequest:
    headers: CreateMatchmakingConfigurationHeaders = dataclasses.field()
    request: shared_creatematchmakingconfigurationinput.CreateMatchmakingConfigurationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMatchmakingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_matchmaking_configuration_output: Optional[shared_creatematchmakingconfigurationoutput.CreateMatchmakingConfigurationOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    tagging_failed_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_region_exception: Optional[Any] = dataclasses.field(default=None)
    
