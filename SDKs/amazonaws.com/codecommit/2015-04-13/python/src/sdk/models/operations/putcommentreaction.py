import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putcommentreactioninput as shared_putcommentreactioninput

class PutCommentReactionXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_PUT_COMMENT_REACTION = "CodeCommit_20150413.PutCommentReaction"


@dataclasses.dataclass
class PutCommentReactionHeaders:
    x_amz_target: PutCommentReactionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCommentReactionRequest:
    headers: PutCommentReactionHeaders = dataclasses.field()
    request: shared_putcommentreactioninput.PutCommentReactionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCommentReactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_deleted_exception: Optional[Any] = dataclasses.field(default=None)
    comment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    comment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_comment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_reaction_value_exception: Optional[Any] = dataclasses.field(default=None)
    reaction_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    reaction_value_required_exception: Optional[Any] = dataclasses.field(default=None)
    
