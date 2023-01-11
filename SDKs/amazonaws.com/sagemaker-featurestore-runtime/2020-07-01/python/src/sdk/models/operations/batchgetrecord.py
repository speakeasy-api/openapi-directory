import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetrecordidentifier as shared_batchgetrecordidentifier
from ..shared import batchgetrecordresponse as shared_batchgetrecordresponse


@dataclasses.dataclass
class BatchGetRecordHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchGetRecordRequestBody:
    identifiers: list[shared_batchgetrecordidentifier.BatchGetRecordIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifiers') }})
    

@dataclasses.dataclass
class BatchGetRecordRequest:
    headers: BatchGetRecordHeaders = dataclasses.field()
    request: BatchGetRecordRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_forbidden: Optional[Any] = dataclasses.field(default=None)
    batch_get_record_response: Optional[shared_batchgetrecordresponse.BatchGetRecordResponse] = dataclasses.field(default=None)
    internal_failure: Optional[Any] = dataclasses.field(default=None)
    service_unavailable: Optional[Any] = dataclasses.field(default=None)
    validation_error: Optional[Any] = dataclasses.field(default=None)
    
