import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributenameandvalue as shared_attributenameandvalue
from ..shared import attachtypedlinkresponse as shared_attachtypedlinkresponse


@dataclasses.dataclass
class AttachTypedLinkHeaders:
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
class AttachTypedLinkRequestBodySourceObjectReference:
    r"""AttachTypedLinkRequestBodySourceObjectReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class AttachTypedLinkRequestBodyTargetObjectReference:
    r"""AttachTypedLinkRequestBodyTargetObjectReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class AttachTypedLinkRequestBodyTypedLinkFacet:
    r"""AttachTypedLinkRequestBodyTypedLinkFacet
    Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    """
    
    schema_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    typed_link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkName') }})
    

@dataclass_json
@dataclasses.dataclass
class AttachTypedLinkRequestBody:
    attributes: list[shared_attributenameandvalue.AttributeNameAndValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    source_object_reference: AttachTypedLinkRequestBodySourceObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceObjectReference') }})
    target_object_reference: AttachTypedLinkRequestBodyTargetObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectReference') }})
    typed_link_facet: AttachTypedLinkRequestBodyTypedLinkFacet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkFacet') }})
    

@dataclasses.dataclass
class AttachTypedLinkRequest:
    headers: AttachTypedLinkHeaders = dataclasses.field()
    request: AttachTypedLinkRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AttachTypedLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    attach_typed_link_response: Optional[shared_attachtypedlinkresponse.AttachTypedLinkResponse] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    facet_validation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_attachment_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
