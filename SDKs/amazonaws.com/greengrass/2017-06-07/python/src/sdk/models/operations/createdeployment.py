import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createdeploymentresponse as shared_createdeploymentresponse


@dataclasses.dataclass
class CreateDeploymentPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'GroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    
class CreateDeploymentRequestBodyDeploymentTypeEnum(str, Enum):
    NEW_DEPLOYMENT = "NewDeployment"
    REDEPLOYMENT = "Redeployment"
    RESET_DEPLOYMENT = "ResetDeployment"
    FORCE_RESET_DEPLOYMENT = "ForceResetDeployment"


@dataclass_json
@dataclasses.dataclass
class CreateDeploymentRequestBody:
    deployment_type: CreateDeploymentRequestBodyDeploymentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    group_version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupVersionId') }})
    

@dataclasses.dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = dataclasses.field()
    path_params: CreateDeploymentPathParams = dataclasses.field()
    request: CreateDeploymentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_deployment_response: Optional[shared_createdeploymentresponse.CreateDeploymentResponse] = dataclasses.field(default=None)
    
