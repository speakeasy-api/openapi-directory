import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import createthingtyperesponse as shared_createthingtyperesponse


@dataclasses.dataclass
class CreateThingTypePathParams:
    thing_type_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'thingTypeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateThingTypeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateThingTypeRequestBodyThingTypeProperties:
    r"""CreateThingTypeRequestBodyThingTypeProperties
    The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
    """
    
    searchable_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchableAttributes') }})
    thing_type_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeDescription') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateThingTypeRequestBody:
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thing_type_properties: Optional[CreateThingTypeRequestBodyThingTypeProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeProperties') }})
    

@dataclasses.dataclass
class CreateThingTypeRequest:
    headers: CreateThingTypeHeaders = dataclasses.field()
    path_params: CreateThingTypePathParams = dataclasses.field()
    request: CreateThingTypeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateThingTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_thing_type_response: Optional[shared_createthingtyperesponse.CreateThingTypeResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
