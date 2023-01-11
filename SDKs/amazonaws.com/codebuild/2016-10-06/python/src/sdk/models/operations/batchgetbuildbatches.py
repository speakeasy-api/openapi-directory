import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetbuildbatchesinput as shared_batchgetbuildbatchesinput
from ..shared import batchgetbuildbatchesoutput as shared_batchgetbuildbatchesoutput

class BatchGetBuildBatchesXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES = "CodeBuild_20161006.BatchGetBuildBatches"


@dataclasses.dataclass
class BatchGetBuildBatchesHeaders:
    x_amz_target: BatchGetBuildBatchesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetBuildBatchesRequest:
    headers: BatchGetBuildBatchesHeaders = dataclasses.field()
    request: shared_batchgetbuildbatchesinput.BatchGetBuildBatchesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetBuildBatchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_build_batches_output: Optional[shared_batchgetbuildbatchesoutput.BatchGetBuildBatchesOutput] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
