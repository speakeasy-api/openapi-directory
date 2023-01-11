import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeinterconnectloarequest as shared_describeinterconnectloarequest
from ..shared import describeinterconnectloaresponse as shared_describeinterconnectloaresponse

class DescribeInterconnectLoaXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA = "OvertureService.DescribeInterconnectLoa"


@dataclasses.dataclass
class DescribeInterconnectLoaHeaders:
    x_amz_target: DescribeInterconnectLoaXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeInterconnectLoaRequest:
    headers: DescribeInterconnectLoaHeaders = dataclasses.field()
    request: shared_describeinterconnectloarequest.DescribeInterconnectLoaRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeInterconnectLoaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_interconnect_loa_response: Optional[shared_describeinterconnectloaresponse.DescribeInterconnectLoaResponse] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
