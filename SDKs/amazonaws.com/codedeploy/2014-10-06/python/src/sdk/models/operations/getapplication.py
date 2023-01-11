import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getapplicationinput as shared_getapplicationinput
from ..shared import getapplicationoutput as shared_getapplicationoutput

class GetApplicationXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_APPLICATION = "CodeDeploy_20141006.GetApplication"


@dataclasses.dataclass
class GetApplicationHeaders:
    x_amz_target: GetApplicationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationRequest:
    headers: GetApplicationHeaders = dataclasses.field()
    request: shared_getapplicationinput.GetApplicationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    get_application_output: Optional[shared_getapplicationoutput.GetApplicationOutput] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    
