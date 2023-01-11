import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putrecordbatchinput as shared_putrecordbatchinput
from ..shared import putrecordbatchoutput as shared_putrecordbatchoutput

class PutRecordBatchXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_PUT_RECORD_BATCH = "Firehose_20150804.PutRecordBatch"


@dataclasses.dataclass
class PutRecordBatchHeaders:
    x_amz_target: PutRecordBatchXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRecordBatchRequest:
    headers: PutRecordBatchHeaders = dataclasses.field()
    request: shared_putrecordbatchinput.PutRecordBatchInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRecordBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_kms_resource_exception: Optional[Any] = dataclasses.field(default=None)
    put_record_batch_output: Optional[shared_putrecordbatchoutput.PutRecordBatchOutput] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
