import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addattachmentstosetrequest as shared_addattachmentstosetrequest
from ..shared import addattachmentstosetresponse as shared_addattachmentstosetresponse

class AddAttachmentsToSetXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_ADD_ATTACHMENTS_TO_SET = "AWSSupport_20130415.AddAttachmentsToSet"


@dataclasses.dataclass
class AddAttachmentsToSetHeaders:
    x_amz_target: AddAttachmentsToSetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddAttachmentsToSetRequest:
    headers: AddAttachmentsToSetHeaders = dataclasses.field()
    request: shared_addattachmentstosetrequest.AddAttachmentsToSetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddAttachmentsToSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_attachments_to_set_response: Optional[shared_addattachmentstosetresponse.AddAttachmentsToSetResponse] = dataclasses.field(default=None)
    attachment_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    attachment_set_expired: Optional[Any] = dataclasses.field(default=None)
    attachment_set_id_not_found: Optional[Any] = dataclasses.field(default=None)
    attachment_set_size_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
