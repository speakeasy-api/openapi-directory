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
class UpdateGarbageCollectionPathParams:
    garbage_collection_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'garbage_collection_uuid', 'style': 'simple', 'explode': False }})
    registry_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registry_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateGarbageCollectionRequestBody:
    cancel: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel') }})
    
class UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum(str, Enum):
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
class UpdateGarbageCollection200ApplicationJSONGarbageCollection:
    blobs_deleted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_deleted') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    freed_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freed_bytes') }})
    registry_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_name') }})
    status: Optional[UpdateGarbageCollection200ApplicationJSONGarbageCollectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateGarbageCollection200ApplicationJSON:
    garbage_collection: Optional[UpdateGarbageCollection200ApplicationJSONGarbageCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('garbage_collection') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateGarbageCollection401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateGarbageCollectionRequest:
    path_params: UpdateGarbageCollectionPathParams = dataclasses.field()
    request: UpdateGarbageCollectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateGarbageCollectionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_garbage_collection_200_application_json_object: Optional[UpdateGarbageCollection200ApplicationJSON] = dataclasses.field(default=None)
    update_garbage_collection_401_application_json_object: Optional[UpdateGarbageCollection401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
