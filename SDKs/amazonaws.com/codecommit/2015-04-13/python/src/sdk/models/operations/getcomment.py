import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcommentinput as shared_getcommentinput
from ..shared import getcommentoutput as shared_getcommentoutput

class GetCommentXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_COMMENT = "CodeCommit_20150413.GetComment"


@dataclasses.dataclass
class GetCommentHeaders:
    x_amz_target: GetCommentXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCommentRequest:
    headers: GetCommentHeaders = dataclasses.field()
    request: shared_getcommentinput.GetCommentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_deleted_exception: Optional[Any] = dataclasses.field(default=None)
    comment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    comment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    get_comment_output: Optional[shared_getcommentoutput.GetCommentOutput] = dataclasses.field(default=None)
    invalid_comment_id_exception: Optional[Any] = dataclasses.field(default=None)
    
