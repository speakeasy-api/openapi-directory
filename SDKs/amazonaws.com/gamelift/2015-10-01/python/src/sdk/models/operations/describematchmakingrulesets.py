import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describematchmakingrulesetsinput as shared_describematchmakingrulesetsinput
from ..shared import describematchmakingrulesetsoutput as shared_describematchmakingrulesetsoutput


@dataclasses.dataclass
class DescribeMatchmakingRuleSetsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeMatchmakingRuleSetsXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_MATCHMAKING_RULE_SETS = "GameLift.DescribeMatchmakingRuleSets"


@dataclasses.dataclass
class DescribeMatchmakingRuleSetsHeaders:
    x_amz_target: DescribeMatchmakingRuleSetsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMatchmakingRuleSetsRequest:
    headers: DescribeMatchmakingRuleSetsHeaders = dataclasses.field()
    query_params: DescribeMatchmakingRuleSetsQueryParams = dataclasses.field()
    request: shared_describematchmakingrulesetsinput.DescribeMatchmakingRuleSetsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeMatchmakingRuleSetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_matchmaking_rule_sets_output: Optional[shared_describematchmakingrulesetsoutput.DescribeMatchmakingRuleSetsOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_region_exception: Optional[Any] = dataclasses.field(default=None)
    
