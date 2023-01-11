import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteparalleldatarequest as shared_deleteparalleldatarequest
from ..shared import deleteparalleldataresponse as shared_deleteparalleldataresponse

class DeleteParallelDataXAmzTargetEnum(str, Enum):
    AWS_SHINE_FRONTEND_SERVICE_20170701_DELETE_PARALLEL_DATA = "AWSShineFrontendService_20170701.DeleteParallelData"


@dataclasses.dataclass
class DeleteParallelDataHeaders:
    x_amz_target: DeleteParallelDataXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteParallelDataRequest:
    headers: DeleteParallelDataHeaders = dataclasses.field()
    request: shared_deleteparalleldatarequest.DeleteParallelDataRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteParallelDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    delete_parallel_data_response: Optional[shared_deleteparalleldataresponse.DeleteParallelDataResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
