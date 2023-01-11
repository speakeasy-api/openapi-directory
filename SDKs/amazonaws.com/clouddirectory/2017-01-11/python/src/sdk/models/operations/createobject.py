import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekeyandvalue as shared_attributekeyandvalue
from ..shared import schemafacet as shared_schemafacet
from ..shared import createobjectresponse as shared_createobjectresponse


@dataclasses.dataclass
class CreateObjectHeaders:
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
class CreateObjectRequestBodyParentReference:
    r"""CreateObjectRequestBodyParentReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateObjectRequestBody:
    schema_facets: list[shared_schemafacet.SchemaFacet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacets') }})
    link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkName') }})
    object_attribute_list: Optional[list[shared_attributekeyandvalue.AttributeKeyAndValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeList') }})
    parent_reference: Optional[CreateObjectRequestBodyParentReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentReference') }})
    

@dataclasses.dataclass
class CreateObjectRequest:
    headers: CreateObjectHeaders = dataclasses.field()
    request: CreateObjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_object_response: Optional[shared_createobjectresponse.CreateObjectResponse] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    facet_validation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    link_name_already_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_index_type_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
