import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetiteminput as shared_batchgetiteminput
from ..shared import batchgetitemoutput as shared_batchgetitemoutput


@dataclasses.dataclass
class BatchGetItemQueryParams:
    request_items: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequestItems', 'style': 'form', 'explode': True }})
    
class BatchGetItemXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20111205_BATCH_GET_ITEM = "DynamoDB_20111205.BatchGetItem"


@dataclasses.dataclass
class BatchGetItemHeaders:
    x_amz_target: BatchGetItemXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetItemRequest:
    headers: BatchGetItemHeaders = dataclasses.field()
    query_params: BatchGetItemQueryParams = dataclasses.field()
    request: shared_batchgetiteminput.BatchGetItemInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_item_output: Optional[shared_batchgetitemoutput.BatchGetItemOutput] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    request_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
