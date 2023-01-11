import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeconnectionsrequest as shared_describeconnectionsrequest
from ..shared import connections as shared_connections

class DescribeConnectionsXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_CONNECTIONS = "OvertureService.DescribeConnections"


@dataclasses.dataclass
class DescribeConnectionsHeaders:
    x_amz_target: DescribeConnectionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeConnectionsRequest:
    headers: DescribeConnectionsHeaders = dataclasses.field()
    request: shared_describeconnectionsrequest.DescribeConnectionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connections: Optional[shared_connections.Connections] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
