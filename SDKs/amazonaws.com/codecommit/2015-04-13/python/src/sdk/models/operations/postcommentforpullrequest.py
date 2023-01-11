import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import postcommentforpullrequestinput as shared_postcommentforpullrequestinput
from ..shared import postcommentforpullrequestoutput as shared_postcommentforpullrequestoutput

class PostCommentForPullRequestXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_POST_COMMENT_FOR_PULL_REQUEST = "CodeCommit_20150413.PostCommentForPullRequest"


@dataclasses.dataclass
class PostCommentForPullRequestHeaders:
    x_amz_target: PostCommentForPullRequestXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCommentForPullRequestRequest:
    headers: PostCommentForPullRequestHeaders = dataclasses.field()
    request: shared_postcommentforpullrequestinput.PostCommentForPullRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCommentForPullRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    before_commit_id_and_after_commit_id_are_same_exception: Optional[Any] = dataclasses.field(default=None)
    client_request_token_required_exception: Optional[Any] = dataclasses.field(default=None)
    comment_content_required_exception: Optional[Any] = dataclasses.field(default=None)
    comment_content_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    commit_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_request_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_commit_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_file_location_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_file_position_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_path_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_relative_file_version_enum_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    path_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    path_required_exception: Optional[Any] = dataclasses.field(default=None)
    post_comment_for_pull_request_output: Optional[shared_postcommentforpullrequestoutput.PostCommentForPullRequestOutput] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_associated_with_pull_request_exception: Optional[Any] = dataclasses.field(default=None)
    
