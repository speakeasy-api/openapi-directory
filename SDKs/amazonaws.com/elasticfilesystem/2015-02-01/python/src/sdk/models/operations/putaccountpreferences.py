import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putaccountpreferencesresponse as shared_putaccountpreferencesresponse


@dataclasses.dataclass
class PutAccountPreferencesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutAccountPreferencesRequestBodyResourceIDTypeEnum(str, Enum):
    LONG_ID = "LONG_ID"
    SHORT_ID = "SHORT_ID"


@dataclass_json
@dataclasses.dataclass
class PutAccountPreferencesRequestBody:
    resource_id_type: PutAccountPreferencesRequestBodyResourceIDTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdType') }})
    

@dataclasses.dataclass
class PutAccountPreferencesRequest:
    headers: PutAccountPreferencesHeaders = dataclasses.field()
    request: PutAccountPreferencesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAccountPreferencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    put_account_preferences_response: Optional[shared_putaccountpreferencesresponse.PutAccountPreferencesResponse] = dataclasses.field(default=None)
    
