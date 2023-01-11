import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectivityinfo as shared_connectivityinfo
from ..shared import updateconnectivityinforesponse as shared_updateconnectivityinforesponse


@dataclasses.dataclass
class UpdateConnectivityInfoPathParams:
    thing_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ThingName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConnectivityInfoHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConnectivityInfoRequestBody:
    connectivity_info: Optional[list[shared_connectivityinfo.ConnectivityInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectivityInfo') }})
    

@dataclasses.dataclass
class UpdateConnectivityInfoRequest:
    headers: UpdateConnectivityInfoHeaders = dataclasses.field()
    path_params: UpdateConnectivityInfoPathParams = dataclasses.field()
    request: UpdateConnectivityInfoRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConnectivityInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    update_connectivity_info_response: Optional[shared_updateconnectivityinforesponse.UpdateConnectivityInfoResponse] = dataclasses.field(default=None)
    
