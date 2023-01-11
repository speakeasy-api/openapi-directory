import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateenvironmentaccountconnectioninput as shared_updateenvironmentaccountconnectioninput
from ..shared import updateenvironmentaccountconnectionoutput as shared_updateenvironmentaccountconnectionoutput

class UpdateEnvironmentAccountConnectionXAmzTargetEnum(str, Enum):
    AWS_PROTON20200720_UPDATE_ENVIRONMENT_ACCOUNT_CONNECTION = "AwsProton20200720.UpdateEnvironmentAccountConnection"


@dataclasses.dataclass
class UpdateEnvironmentAccountConnectionHeaders:
    x_amz_target: UpdateEnvironmentAccountConnectionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEnvironmentAccountConnectionRequest:
    headers: UpdateEnvironmentAccountConnectionHeaders = dataclasses.field()
    request: shared_updateenvironmentaccountconnectioninput.UpdateEnvironmentAccountConnectionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEnvironmentAccountConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_environment_account_connection_output: Optional[shared_updateenvironmentaccountconnectionoutput.UpdateEnvironmentAccountConnectionOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
