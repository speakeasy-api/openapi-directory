import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import allocateconnectiononinterconnectrequest as shared_allocateconnectiononinterconnectrequest
from ..shared import connection as shared_connection

class AllocateConnectionOnInterconnectXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT = "OvertureService.AllocateConnectionOnInterconnect"


@dataclasses.dataclass
class AllocateConnectionOnInterconnectHeaders:
    x_amz_target: AllocateConnectionOnInterconnectXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AllocateConnectionOnInterconnectRequest:
    headers: AllocateConnectionOnInterconnectHeaders = dataclasses.field()
    request: shared_allocateconnectiononinterconnectrequest.AllocateConnectionOnInterconnectRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AllocateConnectionOnInterconnectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection: Optional[shared_connection.Connection] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
