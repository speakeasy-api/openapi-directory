import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletegithubaccounttokeninput as shared_deletegithubaccounttokeninput
from ..shared import deletegithubaccounttokenoutput as shared_deletegithubaccounttokenoutput

class DeleteGitHubAccountTokenXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_GIT_HUB_ACCOUNT_TOKEN = "CodeDeploy_20141006.DeleteGitHubAccountToken"


@dataclasses.dataclass
class DeleteGitHubAccountTokenHeaders:
    x_amz_target: DeleteGitHubAccountTokenXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGitHubAccountTokenRequest:
    headers: DeleteGitHubAccountTokenHeaders = dataclasses.field()
    request: shared_deletegithubaccounttokeninput.DeleteGitHubAccountTokenInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteGitHubAccountTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_git_hub_account_token_output: Optional[shared_deletegithubaccounttokenoutput.DeleteGitHubAccountTokenOutput] = dataclasses.field(default=None)
    git_hub_account_token_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    git_hub_account_token_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_git_hub_account_token_name_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    resource_validation_exception: Optional[Any] = dataclasses.field(default=None)
    
