import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listgithubaccounttokennamesinput as shared_listgithubaccounttokennamesinput
from ..shared import listgithubaccounttokennamesoutput as shared_listgithubaccounttokennamesoutput

class ListGitHubAccountTokenNamesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_GIT_HUB_ACCOUNT_TOKEN_NAMES = "CodeDeploy_20141006.ListGitHubAccountTokenNames"


@dataclasses.dataclass
class ListGitHubAccountTokenNamesHeaders:
    x_amz_target: ListGitHubAccountTokenNamesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListGitHubAccountTokenNamesRequest:
    headers: ListGitHubAccountTokenNamesHeaders = dataclasses.field()
    request: shared_listgithubaccounttokennamesinput.ListGitHubAccountTokenNamesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListGitHubAccountTokenNamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_git_hub_account_token_names_output: Optional[shared_listgithubaccounttokennamesoutput.ListGitHubAccountTokenNamesOutput] = dataclasses.field(default=None)
    operation_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    resource_validation_exception: Optional[Any] = dataclasses.field(default=None)
    
