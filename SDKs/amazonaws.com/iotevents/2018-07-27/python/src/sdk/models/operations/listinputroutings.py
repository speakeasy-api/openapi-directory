import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ioteventsinputidentifier as shared_ioteventsinputidentifier
from ..shared import iotsitewiseinputidentifier as shared_iotsitewiseinputidentifier
from ..shared import listinputroutingsresponse as shared_listinputroutingsresponse


@dataclasses.dataclass
class ListInputRoutingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListInputRoutingsRequestBodyInputIdentifier:
    r"""ListInputRoutingsRequestBodyInputIdentifier
     The identifer of the input. 
    """
    
    iot_events_input_identifier: Optional[shared_ioteventsinputidentifier.IotEventsInputIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEventsInputIdentifier') }})
    iot_site_wise_input_identifier: Optional[shared_iotsitewiseinputidentifier.IotSiteWiseInputIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseInputIdentifier') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInputRoutingsRequestBody:
    input_identifier: ListInputRoutingsRequestBodyInputIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputIdentifier') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

@dataclasses.dataclass
class ListInputRoutingsRequest:
    headers: ListInputRoutingsHeaders = dataclasses.field()
    request: ListInputRoutingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListInputRoutingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_input_routings_response: Optional[shared_listinputroutingsresponse.ListInputRoutingsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
