import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listserverneighborsrequest as shared_listserverneighborsrequest
from ..shared import listserverneighborsresponse as shared_listserverneighborsresponse

class ListServerNeighborsXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_LIST_SERVER_NEIGHBORS = "AWSPoseidonService_V2015_11_01.ListServerNeighbors"


@dataclasses.dataclass
class ListServerNeighborsHeaders:
    x_amz_target: ListServerNeighborsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServerNeighborsRequest:
    headers: ListServerNeighborsHeaders = dataclasses.field()
    request: shared_listserverneighborsrequest.ListServerNeighborsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListServerNeighborsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization_error_exception: Optional[Any] = dataclasses.field(default=None)
    home_region_not_set_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    list_server_neighbors_response: Optional[shared_listserverneighborsresponse.ListServerNeighborsResponse] = dataclasses.field(default=None)
    server_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
