import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class RunGarbageCollectionPathParams:
    registry_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    
class RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum(str, Enum):
    REQUESTED = "requested"
    WAITING_FOR_WRITE_JW_TS_TO_EXPIRE = "waiting for write JWTs to expire"
    SCANNING_MANIFESTS = "scanning manifests"
    DELETING_UNREFERENCED_BLOBS = "deleting unreferenced blobs"
    CANCELLING = "cancelling"
    FAILED = "failed"
    SUCCEEDED = "succeeded"
    CANCELLED = "cancelled"


@dataclass_json
@dataclasses.dataclass
class RunGarbageCollection201ApplicationJSONGarbageCollection:
    blobs_deleted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_deleted') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    freed_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freed_bytes') }})
    registry_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_name') }})
    status: Optional[RunGarbageCollection201ApplicationJSONGarbageCollectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class RunGarbageCollection201ApplicationJSON:
    garbage_collection: Optional[RunGarbageCollection201ApplicationJSONGarbageCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('garbage_collection') }})
    

@dataclass_json
@dataclasses.dataclass
class RunGarbageCollection401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class RunGarbageCollectionRequest:
    path_params: RunGarbageCollectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RunGarbageCollectionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    run_garbage_collection_201_application_json_object: Optional[RunGarbageCollection201ApplicationJSON] = dataclasses.field(default=None)
    run_garbage_collection_401_application_json_object: Optional[RunGarbageCollection401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
