import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addcommunicationtocaserequest as shared_addcommunicationtocaserequest
from ..shared import addcommunicationtocaseresponse as shared_addcommunicationtocaseresponse

class AddCommunicationToCaseXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_ADD_COMMUNICATION_TO_CASE = "AWSSupport_20130415.AddCommunicationToCase"


@dataclasses.dataclass
class AddCommunicationToCaseHeaders:
    x_amz_target: AddCommunicationToCaseXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddCommunicationToCaseRequest:
    headers: AddCommunicationToCaseHeaders = dataclasses.field()
    request: shared_addcommunicationtocaserequest.AddCommunicationToCaseRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddCommunicationToCaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_communication_to_case_response: Optional[shared_addcommunicationtocaseresponse.AddCommunicationToCaseResponse] = dataclasses.field(default=None)
    attachment_set_expired: Optional[Any] = dataclasses.field(default=None)
    attachment_set_id_not_found: Optional[Any] = dataclasses.field(default=None)
    case_id_not_found: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
