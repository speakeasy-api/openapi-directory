import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum(str, Enum):
    DROPLET = "droplet"
    VOLUME = "volume"


@dataclass_json
@dataclasses.dataclass
class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    min_disk_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_disk_size') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    regions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    size_gigabytes: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
