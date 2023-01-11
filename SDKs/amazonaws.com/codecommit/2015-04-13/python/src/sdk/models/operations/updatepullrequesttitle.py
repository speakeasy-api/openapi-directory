import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatepullrequesttitleinput as shared_updatepullrequesttitleinput
from ..shared import updatepullrequesttitleoutput as shared_updatepullrequesttitleoutput

class UpdatePullRequestTitleXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_TITLE = "CodeCommit_20150413.UpdatePullRequestTitle"


@dataclasses.dataclass
class UpdatePullRequestTitleHeaders:
    x_amz_target: UpdatePullRequestTitleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePullRequestTitleRequest:
    headers: UpdatePullRequestTitleHeaders = dataclasses.field()
    request: shared_updatepullrequesttitleinput.UpdatePullRequestTitleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePullRequestTitleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_title_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_already_closed_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    title_required_exception: Optional[Any] = dataclasses.field(default=None)
    update_pull_request_title_output: Optional[shared_updatepullrequesttitleoutput.UpdatePullRequestTitleOutput] = dataclasses.field(default=None)
    
