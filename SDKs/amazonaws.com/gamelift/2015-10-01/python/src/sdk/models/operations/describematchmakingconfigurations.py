import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describematchmakingconfigurationsinput as shared_describematchmakingconfigurationsinput
from ..shared import describematchmakingconfigurationsoutput as shared_describematchmakingconfigurationsoutput


@dataclasses.dataclass
class DescribeMatchmakingConfigurationsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeMatchmakingConfigurationsXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_MATCHMAKING_CONFIGURATIONS = "GameLift.DescribeMatchmakingConfigurations"


@dataclasses.dataclass
class DescribeMatchmakingConfigurationsHeaders:
    x_amz_target: DescribeMatchmakingConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMatchmakingConfigurationsRequest:
    headers: DescribeMatchmakingConfigurationsHeaders = dataclasses.field()
    query_params: DescribeMatchmakingConfigurationsQueryParams = dataclasses.field()
    request: shared_describematchmakingconfigurationsinput.DescribeMatchmakingConfigurationsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeMatchmakingConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_matchmaking_configurations_output: Optional[shared_describematchmakingconfigurationsoutput.DescribeMatchmakingConfigurationsOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_region_exception: Optional[Any] = dataclasses.field(default=None)
    
