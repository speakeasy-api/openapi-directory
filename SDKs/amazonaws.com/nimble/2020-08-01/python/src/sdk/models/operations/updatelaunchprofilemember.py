import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatelaunchprofilememberresponse as shared_updatelaunchprofilememberresponse


@dataclasses.dataclass
class UpdateLaunchProfileMemberPathParams:
    launch_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'launchProfileId', 'style': 'simple', 'explode': False }})
    principal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'principalId', 'style': 'simple', 'explode': False }})
    studio_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLaunchProfileMemberHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateLaunchProfileMemberRequestBodyPersonaEnum(str, Enum):
    USER = "USER"


@dataclass_json
@dataclasses.dataclass
class UpdateLaunchProfileMemberRequestBody:
    persona: UpdateLaunchProfileMemberRequestBodyPersonaEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persona') }})
    

@dataclasses.dataclass
class UpdateLaunchProfileMemberRequest:
    headers: UpdateLaunchProfileMemberHeaders = dataclasses.field()
    path_params: UpdateLaunchProfileMemberPathParams = dataclasses.field()
    request: UpdateLaunchProfileMemberRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLaunchProfileMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_launch_profile_member_response: Optional[shared_updatelaunchprofilememberresponse.UpdateLaunchProfileMemberResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
