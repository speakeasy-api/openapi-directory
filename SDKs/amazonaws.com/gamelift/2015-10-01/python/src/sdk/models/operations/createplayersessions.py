import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createplayersessionsinput as shared_createplayersessionsinput
from ..shared import createplayersessionsoutput as shared_createplayersessionsoutput

class CreatePlayerSessionsXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_PLAYER_SESSIONS = "GameLift.CreatePlayerSessions"


@dataclasses.dataclass
class CreatePlayerSessionsHeaders:
    x_amz_target: CreatePlayerSessionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePlayerSessionsRequest:
    headers: CreatePlayerSessionsHeaders = dataclasses.field()
    request: shared_createplayersessionsinput.CreatePlayerSessionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePlayerSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_player_sessions_output: Optional[shared_createplayersessionsoutput.CreatePlayerSessionsOutput] = dataclasses.field(default=None)
    game_session_full_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_game_session_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    terminal_routing_strategy_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
