import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putrecordsinput as shared_putrecordsinput
from ..shared import putrecordsoutput as shared_putrecordsoutput

class PutRecordsXAmzTargetEnum(str, Enum):
    KINESIS_20131202_PUT_RECORDS = "Kinesis_20131202.PutRecords"


@dataclasses.dataclass
class PutRecordsHeaders:
    x_amz_target: PutRecordsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRecordsRequest:
    headers: PutRecordsHeaders = dataclasses.field()
    request: shared_putrecordsinput.PutRecordsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRecordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    kms_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    kms_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    kms_invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    kms_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    kms_opt_in_required: Optional[Any] = dataclasses.field(default=None)
    kms_throttling_exception: Optional[Any] = dataclasses.field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    put_records_output: Optional[shared_putrecordsoutput.PutRecordsOutput] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
