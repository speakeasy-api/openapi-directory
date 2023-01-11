import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetServiceLinkedRoleDeletionStatusActionEnum(str, Enum):
    GET_SERVICE_LINKED_ROLE_DELETION_STATUS = "GetServiceLinkedRoleDeletionStatus"

class GetGetServiceLinkedRoleDeletionStatusVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetGetServiceLinkedRoleDeletionStatusQueryParams:
    action: GetGetServiceLinkedRoleDeletionStatusActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    deletion_task_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DeletionTaskId', 'style': 'form', 'explode': True }})
    version: GetGetServiceLinkedRoleDeletionStatusVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetServiceLinkedRoleDeletionStatusHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetServiceLinkedRoleDeletionStatusRequest:
    headers: GetGetServiceLinkedRoleDeletionStatusHeaders = dataclasses.field()
    query_params: GetGetServiceLinkedRoleDeletionStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetServiceLinkedRoleDeletionStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
