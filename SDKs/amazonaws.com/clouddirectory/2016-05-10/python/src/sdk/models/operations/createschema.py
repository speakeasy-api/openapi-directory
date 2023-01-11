import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import createschemaresponse as shared_createschemaresponse
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import schemaalreadyexistsexception as shared_schemaalreadyexistsexception
from ..shared import validationexception as shared_validationexception


@dataclasses.dataclass
class CreateSchemaHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSchemaRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclasses.dataclass
class CreateSchemaRequest:
    headers: CreateSchemaHeaders = dataclasses.field()
    request: CreateSchemaRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    create_schema_response: Optional[shared_createschemaresponse.CreateSchemaResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    schema_already_exists_exception: Optional[shared_schemaalreadyexistsexception.SchemaAlreadyExistsException] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
