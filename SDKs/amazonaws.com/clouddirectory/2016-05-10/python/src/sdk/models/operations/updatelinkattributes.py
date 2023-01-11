import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributenameandvalue as shared_attributenameandvalue
from ..shared import objectreference as shared_objectreference
from ..shared import typedlinkschemaandfacetname as shared_typedlinkschemaandfacetname
from ..shared import linkattributeupdate as shared_linkattributeupdate
from ..shared import accessdeniedexception as shared_accessdeniedexception
from ..shared import directorynotenabledexception as shared_directorynotenabledexception
from ..shared import facetvalidationexception as shared_facetvalidationexception
from ..shared import internalserviceexception as shared_internalserviceexception
from ..shared import invalidarnexception as shared_invalidarnexception
from ..shared import limitexceededexception as shared_limitexceededexception
from ..shared import resourcenotfoundexception as shared_resourcenotfoundexception
from ..shared import retryableconflictexception as shared_retryableconflictexception
from ..shared import validationexception as shared_validationexception


@dataclasses.dataclass
class UpdateLinkAttributesHeaders:
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
class UpdateLinkAttributesRequestBodyTypedLinkSpecifier:
    r"""UpdateLinkAttributesRequestBodyTypedLinkSpecifier
    Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
    """
    
    identity_attribute_values: Optional[list[shared_attributenameandvalue.AttributeNameAndValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityAttributeValues') }})
    source_object_reference: Optional[shared_objectreference.ObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: Optional[shared_objectreference.ObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: Optional[shared_typedlinkschemaandfacetname.TypedLinkSchemaAndFacetName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateLinkAttributesRequestBody:
    attribute_updates: list[shared_linkattributeupdate.LinkAttributeUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    typed_link_specifier: UpdateLinkAttributesRequestBodyTypedLinkSpecifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    

@dataclasses.dataclass
class UpdateLinkAttributesRequest:
    headers: UpdateLinkAttributesHeaders = dataclasses.field()
    request: UpdateLinkAttributesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLinkAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[shared_accessdeniedexception.AccessDeniedException] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[shared_directorynotenabledexception.DirectoryNotEnabledException] = dataclasses.field(default=None)
    facet_validation_exception: Optional[shared_facetvalidationexception.FacetValidationException] = dataclasses.field(default=None)
    internal_service_exception: Optional[shared_internalserviceexception.InternalServiceException] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[shared_invalidarnexception.InvalidArnException] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[shared_limitexceededexception.LimitExceededException] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[shared_resourcenotfoundexception.ResourceNotFoundException] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[shared_retryableconflictexception.RetryableConflictException] = dataclasses.field(default=None)
    update_link_attributes_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    validation_exception: Optional[shared_validationexception.ValidationException] = dataclasses.field(default=None)
    
