import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describematchmakinginput as shared_describematchmakinginput
from ..shared import describematchmakingoutput as shared_describematchmakingoutput

class DescribeMatchmakingXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_MATCHMAKING = "GameLift.DescribeMatchmaking"


@dataclasses.dataclass
class DescribeMatchmakingHeaders:
    x_amz_target: DescribeMatchmakingXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMatchmakingRequest:
    headers: DescribeMatchmakingHeaders = dataclasses.field()
    request: shared_describematchmakinginput.DescribeMatchmakingInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeMatchmakingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_matchmaking_output: Optional[shared_describematchmakingoutput.DescribeMatchmakingOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_region_exception: Optional[Any] = dataclasses.field(default=None)
    
