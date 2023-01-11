import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletefileinput as shared_deletefileinput
from ..shared import deletefileoutput as shared_deletefileoutput

class DeleteFileXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DELETE_FILE = "CodeCommit_20150413.DeleteFile"


@dataclasses.dataclass
class DeleteFileHeaders:
    x_amz_target: DeleteFileXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileRequest:
    headers: DeleteFileHeaders = dataclasses.field()
    request: shared_deletefileinput.DeleteFileInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branch_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_is_tag_name_exception: Optional[Any] = dataclasses.field(default=None)
    branch_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    commit_message_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    delete_file_output: Optional[shared_deletefileoutput.DeleteFileOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    file_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_branch_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_email_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parent_commit_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_path_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    name_length_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    parent_commit_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    parent_commit_id_outdated_exception: Optional[Any] = dataclasses.field(default=None)
    parent_commit_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    path_required_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    
