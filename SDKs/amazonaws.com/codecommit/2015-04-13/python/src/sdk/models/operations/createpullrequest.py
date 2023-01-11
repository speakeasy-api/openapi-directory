import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createpullrequestinput as shared_createpullrequestinput
from ..shared import createpullrequestoutput as shared_createpullrequestoutput

class CreatePullRequestXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_PULL_REQUEST = "CodeCommit_20150413.CreatePullRequest"


@dataclasses.dataclass
class CreatePullRequestHeaders:
    x_amz_target: CreatePullRequestXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePullRequestRequest:
    headers: CreatePullRequestHeaders = dataclasses.field()
    request: shared_createpullrequestinput.CreatePullRequestInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePullRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_request_token_required_exception: Optional[Any] = dataclasses.field(default=None)
    create_pull_request_output: Optional[shared_createpullrequestoutput.CreatePullRequestOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_request_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_description_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_reference_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_targets_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_title_exception: Optional[Any] = dataclasses.field(default=None)
    maximum_open_pull_requests_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    multiple_repositories_in_pull_request_exception: Optional[Any] = dataclasses.field(default=None)
    reference_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    reference_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    reference_type_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    repository_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    source_and_destination_are_same_exception: Optional[Any] = dataclasses.field(default=None)
    target_required_exception: Optional[Any] = dataclasses.field(default=None)
    targets_required_exception: Optional[Any] = dataclasses.field(default=None)
    title_required_exception: Optional[Any] = dataclasses.field(default=None)
    
