import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getactiontypeinput as shared_getactiontypeinput
from ..shared import getactiontypeoutput as shared_getactiontypeoutput

class GetActionTypeXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_GET_ACTION_TYPE = "CodePipeline_20150709.GetActionType"


@dataclasses.dataclass
class GetActionTypeHeaders:
    x_amz_target: GetActionTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActionTypeRequest:
    headers: GetActionTypeHeaders = dataclasses.field()
    request: shared_getactiontypeinput.GetActionTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetActionTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_type_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    get_action_type_output: Optional[shared_getactiontypeoutput.GetActionTypeOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
