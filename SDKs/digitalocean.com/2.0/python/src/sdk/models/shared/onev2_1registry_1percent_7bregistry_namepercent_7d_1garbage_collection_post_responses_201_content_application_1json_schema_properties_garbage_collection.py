import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum(str, Enum):
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
class Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection:
    blobs_deleted: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobs_deleted') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    freed_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freed_bytes') }})
    registry_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_name') }})
    status: Optional[Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
