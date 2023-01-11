import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupidentity as shared_groupidentity
from ..shared import iamroleidentity as shared_iamroleidentity
from ..shared import iamuseridentity as shared_iamuseridentity
from ..shared import useridentity as shared_useridentity
from ..shared import portalresource as shared_portalresource
from ..shared import projectresource as shared_projectresource


@dataclasses.dataclass
class UpdateAccessPolicyPathParams:
    access_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccessPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccessPolicyRequestBodyAccessPolicyIdentity:
    r"""UpdateAccessPolicyRequestBodyAccessPolicyIdentity
    <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href=\"https://console.aws.amazon.com/singlesignon\">Amazon Web Services SSO console</a>.</p> </note>
    """
    
    group: Optional[shared_groupidentity.GroupIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    iam_role: Optional[shared_iamroleidentity.IamRoleIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    iam_user: Optional[shared_iamuseridentity.IamUserIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUser') }})
    user: Optional[shared_useridentity.UserIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum(str, Enum):
    ADMINISTRATOR = "ADMINISTRATOR"
    VIEWER = "VIEWER"


@dataclass_json
@dataclasses.dataclass
class UpdateAccessPolicyRequestBodyAccessPolicyResource:
    r"""UpdateAccessPolicyRequestBodyAccessPolicyResource
    Contains an IoT SiteWise Monitor resource ID for a portal or project.
    """
    
    portal: Optional[shared_portalresource.PortalResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal') }})
    project: Optional[shared_projectresource.ProjectResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccessPolicyRequestBody:
    access_policy_identity: UpdateAccessPolicyRequestBodyAccessPolicyIdentity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyIdentity') }})
    access_policy_permission: UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyPermission') }})
    access_policy_resource: UpdateAccessPolicyRequestBodyAccessPolicyResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyResource') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclasses.dataclass
class UpdateAccessPolicyRequest:
    headers: UpdateAccessPolicyHeaders = dataclasses.field()
    path_params: UpdateAccessPolicyPathParams = dataclasses.field()
    request: UpdateAccessPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAccessPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_access_policy_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
