import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributepayload as shared_attributepayload
from ..shared import tag as shared_tag
from ..shared import createdynamicthinggroupresponse as shared_createdynamicthinggroupresponse


@dataclasses.dataclass
class CreateDynamicThingGroupPathParams:
    thing_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'thingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDynamicThingGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDynamicThingGroupRequestBodyThingGroupProperties:
    r"""CreateDynamicThingGroupRequestBodyThingGroupProperties
    Thing group properties.
    """
    
    attribute_payload: Optional[shared_attributepayload.AttributePayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePayload') }})
    thing_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupDescription') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDynamicThingGroupRequestBody:
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    query_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thing_group_properties: Optional[CreateDynamicThingGroupRequestBodyThingGroupProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupProperties') }})
    

@dataclasses.dataclass
class CreateDynamicThingGroupRequest:
    headers: CreateDynamicThingGroupHeaders = dataclasses.field()
    path_params: CreateDynamicThingGroupPathParams = dataclasses.field()
    request: CreateDynamicThingGroupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDynamicThingGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_dynamic_thing_group_response: Optional[shared_createdynamicthinggroupresponse.CreateDynamicThingGroupResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_query_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
