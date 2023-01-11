import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListAllActionsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONActionsRegion:
    available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    features: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sizes: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
class ListAllActions200ApplicationJSONActionsStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    ERRORED = "errored"


@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONActions:
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    region: Optional[ListAllActions200ApplicationJSONActionsRegion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    region_slug: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region_slug') }})
    resource_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ListAllActions200ApplicationJSONActionsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSONMeta:
    r"""ListAllActions200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions200ApplicationJSON:
    meta: ListAllActions200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    actions: Optional[list[ListAllActions200ApplicationJSONActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    links: Optional[ListAllActions200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllActions401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAllActionsRequest:
    query_params: ListAllActionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAllActionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_actions_200_application_json_object: Optional[ListAllActions200ApplicationJSON] = dataclasses.field(default=None)
    list_all_actions_401_application_json_object: Optional[ListAllActions401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
