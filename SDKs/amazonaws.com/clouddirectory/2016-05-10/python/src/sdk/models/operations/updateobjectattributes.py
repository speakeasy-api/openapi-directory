import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectattributeupdate as shared_objectattributeupdate
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import directorynotenabledexception as shared_directorynotenabledexception
from ..shared import facetvalidationexception as shared_facetvalidationexception
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import linknamealreadyinuseexception as shared_linknamealreadyinuseexception
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import updateobjectattributesresponse as shared_updateobjectattributesresponse
from ..shared import validationexception as shared_validationexception


@dataclasses.dataclass
class UpdateObjectAttributesHeaders:
    x_amz_data_partition: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateObjectAttributesRequestBodyObjectReference:
    r"""UpdateObjectAttributesRequestBodyObjectReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateObjectAttributesRequestBody:
    attribute_updates: list[shared_objectattributeupdate.ObjectAttributeUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    object_reference: UpdateObjectAttributesRequestBodyObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    

@dataclasses.dataclass
class UpdateObjectAttributesRequest:
    headers: UpdateObjectAttributesHeaders = dataclasses.field()
    request: UpdateObjectAttributesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateObjectAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[shared_directorynotenabledexception.DirectoryNotEnabledException] = dataclasses.field(default=None)
    facet_validation_exception: Optional[shared_facetvalidationexception.FacetValidationException] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    link_name_already_in_use_exception: Optional[shared_linknamealreadyinuseexception.LinkNameAlreadyInUseException] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    update_object_attributes_response: Optional[shared_updateobjectattributesresponse.UpdateObjectAttributesResponse] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
