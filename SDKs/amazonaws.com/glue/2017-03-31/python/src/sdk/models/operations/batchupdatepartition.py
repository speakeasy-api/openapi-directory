import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchupdatepartitionrequest as shared_batchupdatepartitionrequest
from ..shared import batchupdatepartitionresponse as shared_batchupdatepartitionresponse

class BatchUpdatePartitionXAmzTargetEnum(str, Enum):
    AWS_GLUE_BATCH_UPDATE_PARTITION = "AWSGlue.BatchUpdatePartition"


@dataclasses.dataclass
class BatchUpdatePartitionHeaders:
    x_amz_target: BatchUpdatePartitionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchUpdatePartitionRequest:
    headers: BatchUpdatePartitionHeaders = dataclasses.field()
    request: shared_batchupdatepartitionrequest.BatchUpdatePartitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchUpdatePartitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_update_partition_response: Optional[shared_batchupdatepartitionresponse.BatchUpdatePartitionResponse] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    glue_encryption_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
