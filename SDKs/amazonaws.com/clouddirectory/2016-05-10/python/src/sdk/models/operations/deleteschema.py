import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import deleteschemaresponse as shared_deleteschemaresponse
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import stillcontainslinksexception as shared_stillcontainslinksexception
from ..shared import validationexception as shared_validationexception


@dataclasses.dataclass
class DeleteSchemaHeaders:
    x_amz_data_partition: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSchemaRequest:
    headers: DeleteSchemaHeaders = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    delete_schema_response: Optional[shared_deleteschemaresponse.DeleteSchemaResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    still_contains_links_exception: Optional[shared_stillcontainslinksexception.StillContainsLinksException] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
