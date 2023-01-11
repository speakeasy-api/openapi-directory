import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchreadoperation as shared_batchreadoperation
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import batchreadresponse as shared_batchreadresponse
from ..shared import directorynotenabledexception as shared_directorynotenabledexception
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import validationexception as shared_validationexception

class BatchReadXAmzConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclasses.dataclass
class BatchReadHeaders:
    x_amz_data_partition: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_consistency_level: Optional[BatchReadXAmzConsistencyLevelEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-consistency-level', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchReadRequestBody:
    operations: list[shared_batchreadoperation.BatchReadOperation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    

@dataclasses.dataclass
class BatchReadRequest:
    headers: BatchReadHeaders = dataclasses.field()
    request: BatchReadRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    batch_read_response: Optional[shared_batchreadresponse.BatchReadResponse] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[shared_directorynotenabledexception.DirectoryNotEnabledException] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
