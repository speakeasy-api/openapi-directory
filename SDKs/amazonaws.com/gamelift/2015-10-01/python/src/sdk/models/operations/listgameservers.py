import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listgameserversinput as shared_listgameserversinput
from ..shared import listgameserversoutput as shared_listgameserversoutput


@dataclasses.dataclass
class ListGameServersQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListGameServersXAmzTargetEnum(str, Enum):
    GAME_LIFT_LIST_GAME_SERVERS = "GameLift.ListGameServers"


@dataclasses.dataclass
class ListGameServersHeaders:
    x_amz_target: ListGameServersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListGameServersRequest:
    headers: ListGameServersHeaders = dataclasses.field()
    query_params: ListGameServersQueryParams = dataclasses.field()
    request: shared_listgameserversinput.ListGameServersInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListGameServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_game_servers_output: Optional[shared_listgameserversoutput.ListGameServersOutput] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
