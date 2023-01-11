import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import postcommentreplyinput as shared_postcommentreplyinput
from ..shared import postcommentreplyoutput as shared_postcommentreplyoutput

class PostCommentReplyXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_REPLY = "CodeCommit_20150413.PostCommentReply"


@dataclasses.dataclass
class PostCommentReplyHeaders:
    x_amz_target: PostCommentReplyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCommentReplyRequest:
    headers: PostCommentReplyHeaders = dataclasses.field()
    request: shared_postcommentreplyinput.PostCommentReplyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCommentReplyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_request_token_required_exception: Optional[Any] = dataclasses.field(default=None)
    comment_content_required_exception: Optional[Any] = dataclasses.field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    comment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    comment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_request_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_comment_id_exception: Optional[Any] = dataclasses.field(default=None)
    post_comment_reply_output: Optional[shared_postcommentreplyoutput.PostCommentReplyOutput] = dataclasses.field(default=None)
    
