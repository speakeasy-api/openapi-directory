import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gettranscriptresponse as shared_gettranscriptresponse


@dataclasses.dataclass
class GetTranscriptQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTranscriptHeaders:
    x_amz_bearer: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Bearer', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetTranscriptRequestBodyScanDirectionEnum(str, Enum):
    FORWARD = "FORWARD"
    BACKWARD = "BACKWARD"

class GetTranscriptRequestBodySortOrderEnum(str, Enum):
    DESCENDING = "DESCENDING"
    ASCENDING = "ASCENDING"


@dataclass_json
@dataclasses.dataclass
class GetTranscriptRequestBodyStartPosition:
    r"""GetTranscriptRequestBodyStartPosition
    A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
    """
    
    absolute_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTime') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    most_recent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MostRecent') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTranscriptRequestBody:
    contact_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scan_direction: Optional[GetTranscriptRequestBodyScanDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScanDirection') }})
    sort_order: Optional[GetTranscriptRequestBodySortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    start_position: Optional[GetTranscriptRequestBodyStartPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPosition') }})
    

@dataclasses.dataclass
class GetTranscriptRequest:
    headers: GetTranscriptHeaders = dataclasses.field()
    query_params: GetTranscriptQueryParams = dataclasses.field()
    request: GetTranscriptRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTranscriptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_transcript_response: Optional[shared_gettranscriptresponse.GetTranscriptResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
