import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeattachmentrequest as shared_describeattachmentrequest
from ..shared import describeattachmentresponse as shared_describeattachmentresponse

class DescribeAttachmentXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_DESCRIBE_ATTACHMENT = "AWSSupport_20130415.DescribeAttachment"


@dataclasses.dataclass
class DescribeAttachmentHeaders:
    x_amz_target: DescribeAttachmentXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAttachmentRequest:
    headers: DescribeAttachmentHeaders = dataclasses.field()
    request: shared_describeattachmentrequest.DescribeAttachmentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    attachment_id_not_found: Optional[Any] = dataclasses.field(default=None)
    describe_attachment_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    describe_attachment_response: Optional[shared_describeattachmentresponse.DescribeAttachmentResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
