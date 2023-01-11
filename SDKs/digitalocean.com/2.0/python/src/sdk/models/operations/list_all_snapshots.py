import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1account_1keys_get_parameters_1_enum as shared_onev2_1account_1keys_get_parameters_1_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListAllSnapshotsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    resource_type: Optional[shared_onev2_1account_1keys_get_parameters_1_enum.Onev21account1keysGetParameters1Enum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSONMeta:
    r"""ListAllSnapshots200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
class ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum(str, Enum):
    DROPLET = "droplet"
    VOLUME = "volume"


@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSONSnapshots:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    min_disk_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_disk_size') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    regions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: ListAllSnapshots200ApplicationJSONSnapshotsResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    size_gigabytes: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots200ApplicationJSON:
    meta: ListAllSnapshots200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    links: Optional[ListAllSnapshots200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    snapshots: Optional[list[ListAllSnapshots200ApplicationJSONSnapshots]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshots') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllSnapshots401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAllSnapshotsRequest:
    query_params: ListAllSnapshotsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAllSnapshotsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_snapshots_200_application_json_object: Optional[ListAllSnapshots200ApplicationJSON] = dataclasses.field(default=None)
    list_all_snapshots_401_application_json_object: Optional[ListAllSnapshots401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
