import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatetyperesponse as shared_updatetyperesponse


@dataclasses.dataclass
class UpdateTypePathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    type_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTypeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateTypeRequestBodyFormatEnum(str, Enum):
    SDL = "SDL"
    JSON = "JSON"


@dataclass_json
@dataclasses.dataclass
class UpdateTypeRequestBody:
    format: UpdateTypeRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    

@dataclasses.dataclass
class UpdateTypeRequest:
    headers: UpdateTypeHeaders = dataclasses.field()
    path_params: UpdateTypePathParams = dataclasses.field()
    request: UpdateTypeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    update_type_response: Optional[shared_updatetyperesponse.UpdateTypeResponse] = dataclasses.field(default=None)
    
