import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatepullrequestdescriptioninput as shared_updatepullrequestdescriptioninput
from ..shared import updatepullrequestdescriptionoutput as shared_updatepullrequestdescriptionoutput

class UpdatePullRequestDescriptionXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UPDATE_PULL_REQUEST_DESCRIPTION = "CodeCommit_20150413.UpdatePullRequestDescription"


@dataclasses.dataclass
class UpdatePullRequestDescriptionHeaders:
    x_amz_target: UpdatePullRequestDescriptionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePullRequestDescriptionRequest:
    headers: UpdatePullRequestDescriptionHeaders = dataclasses.field()
    request: shared_updatepullrequestdescriptioninput.UpdatePullRequestDescriptionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePullRequestDescriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_description_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pull_request_id_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_already_closed_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    pull_request_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    update_pull_request_description_output: Optional[shared_updatepullrequestdescriptionoutput.UpdatePullRequestDescriptionOutput] = dataclasses.field(default=None)
    
