import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountactionrequiredexception as shared_accountactionrequiredexception
from ..shared import badrequestexception as shared_badrequestexception
from ..shared import internalfailureexception as shared_internalfailureexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import notfoundexception as shared_notfoundexception
from ..shared import serviceunavailableexception as shared_serviceunavailableexception
from ..shared import toomanyrequestsexception as shared_toomanyrequestsexception
from ..shared import unauthorizedexception as shared_unauthorizedexception
from ..shared import updateprojectresult as shared_updateprojectresult


@dataclasses.dataclass
class UpdateProjectQueryParams:
    project_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateProjectHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateProjectRequestBody:
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    

@dataclasses.dataclass
class UpdateProjectRequest:
    headers: UpdateProjectHeaders = dataclasses.field()
    query_params: UpdateProjectQueryParams = dataclasses.field()
    request: UpdateProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_action_required_exception: Optional[shared_accountactionrequiredexception.AccountActionRequiredException] = dataclasses.field(default=None)
    bad_request_exception: Optional[shared_badrequestexception.BadRequestException] = dataclasses.field(default=None)
    internal_failure_exception: Optional[shared_internalfailureexception.InternalFailureException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    not_found_exception: Optional[shared_notfoundexception.NotFoundException] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[shared_serviceunavailableexception.ServiceUnavailableException] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[shared_toomanyrequestsexception.TooManyRequestsException] = dataclasses.field(default=None)
    unauthorized_exception: Optional[shared_unauthorizedexception.UnauthorizedException] = dataclasses.field(default=None)
    update_project_result: Optional[shared_updateprojectresult.UpdateProjectResult] = dataclasses.field(default=None)
    
