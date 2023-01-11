import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import validatematchmakingrulesetinput as shared_validatematchmakingrulesetinput
from ..shared import validatematchmakingrulesetoutput as shared_validatematchmakingrulesetoutput

class ValidateMatchmakingRuleSetXAmzTargetEnum(str, Enum):
    GAME_LIFT_VALIDATE_MATCHMAKING_RULE_SET = "GameLift.ValidateMatchmakingRuleSet"


@dataclasses.dataclass
class ValidateMatchmakingRuleSetHeaders:
    x_amz_target: ValidateMatchmakingRuleSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateMatchmakingRuleSetRequest:
    headers: ValidateMatchmakingRuleSetHeaders = dataclasses.field()
    request: shared_validatematchmakingrulesetinput.ValidateMatchmakingRuleSetInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateMatchmakingRuleSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_region_exception: Optional[Any] = dataclasses.field(default=None)
    validate_matchmaking_rule_set_output: Optional[shared_validatematchmakingrulesetoutput.ValidateMatchmakingRuleSetOutput] = dataclasses.field(default=None)
    
