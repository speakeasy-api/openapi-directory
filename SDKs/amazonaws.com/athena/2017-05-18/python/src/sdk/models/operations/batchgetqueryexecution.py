import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetqueryexecutioninput as shared_batchgetqueryexecutioninput
from ..shared import batchgetqueryexecutionoutput as shared_batchgetqueryexecutionoutput

class BatchGetQueryExecutionXAmzTargetEnum(str, Enum):
    AMAZON_ATHENA_BATCH_GET_QUERY_EXECUTION = "AmazonAthena.BatchGetQueryExecution"


@dataclasses.dataclass
class BatchGetQueryExecutionHeaders:
    x_amz_target: BatchGetQueryExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetQueryExecutionRequest:
    headers: BatchGetQueryExecutionHeaders = dataclasses.field()
    request: shared_batchgetqueryexecutioninput.BatchGetQueryExecutionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetQueryExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_query_execution_output: Optional[shared_batchgetqueryexecutionoutput.BatchGetQueryExecutionOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
