import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registeronpremisesinstanceinput as shared_registeronpremisesinstanceinput

class RegisterOnPremisesInstanceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_REGISTER_ON_PREMISES_INSTANCE = "CodeDeploy_20141006.RegisterOnPremisesInstance"


@dataclasses.dataclass
class RegisterOnPremisesInstanceHeaders:
    x_amz_target: RegisterOnPremisesInstanceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterOnPremisesInstanceRequest:
    headers: RegisterOnPremisesInstanceHeaders = dataclasses.field()
    request: shared_registeronpremisesinstanceinput.RegisterOnPremisesInstanceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterOnPremisesInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    iam_arn_required_exception: Optional[Any] = dataclasses.field(default=None)
    iam_session_arn_already_registered_exception: Optional[Any] = dataclasses.field(default=None)
    iam_user_arn_already_registered_exception: Optional[Any] = dataclasses.field(default=None)
    iam_user_arn_required_exception: Optional[Any] = dataclasses.field(default=None)
    instance_name_already_registered_exception: Optional[Any] = dataclasses.field(default=None)
    instance_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_iam_session_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_iam_user_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_name_exception: Optional[Any] = dataclasses.field(default=None)
    multiple_iam_arns_provided_exception: Optional[Any] = dataclasses.field(default=None)
    
