import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchgetstreamkeyresponse as shared_batchgetstreamkeyresponse


@dataclasses.dataclass
class BatchGetStreamKeyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchGetStreamKeyRequestBody:
    arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arns') }})
    

@dataclasses.dataclass
class BatchGetStreamKeyRequest:
    headers: BatchGetStreamKeyHeaders = dataclasses.field()
    request: BatchGetStreamKeyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetStreamKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_stream_key_response: Optional[shared_batchgetstreamkeyresponse.BatchGetStreamKeyResponse] = dataclasses.field(default=None)
    
