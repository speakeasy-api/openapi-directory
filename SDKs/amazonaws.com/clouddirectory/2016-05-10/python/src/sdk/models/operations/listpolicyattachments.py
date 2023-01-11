import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import directorynotenabledexception as shared_directorynotenabledexception
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import invalidnexttokenexception as shared_invalidnexttokenexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import listpolicyattachmentsresponse as shared_listpolicyattachmentsresponse
from ..shared import notpolicyexception as shared_notpolicyexception
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import validationexception as shared_validationexception


@dataclasses.dataclass
class ListPolicyAttachmentsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListPolicyAttachmentsXAmzConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclasses.dataclass
class ListPolicyAttachmentsHeaders:
    x_amz_data_partition: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_consistency_level: Optional[ListPolicyAttachmentsXAmzConsistencyLevelEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-consistency-level', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListPolicyAttachmentsRequestBodyPolicyReference:
    r"""ListPolicyAttachmentsRequestBodyPolicyReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPolicyAttachmentsRequestBody:
    policy_reference: ListPolicyAttachmentsRequestBodyPolicyReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyReference') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

@dataclasses.dataclass
class ListPolicyAttachmentsRequest:
    headers: ListPolicyAttachmentsHeaders = dataclasses.field()
    query_params: ListPolicyAttachmentsQueryParams = dataclasses.field()
    request: ListPolicyAttachmentsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListPolicyAttachmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[shared_directorynotenabledexception.DirectoryNotEnabledException] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[shared_invalidnexttokenexception.InvalidNextTokenException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    list_policy_attachments_response: Optional[shared_listpolicyattachmentsresponse.ListPolicyAttachmentsResponse] = dataclasses.field(default=None)
    not_policy_exception: Optional[shared_notpolicyexception.NotPolicyException] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
