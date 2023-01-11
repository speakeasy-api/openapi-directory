import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"
    BACKUP = "backup"


@dataclass_json
@dataclasses.dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    min_disk_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_disk_size') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    regions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    size_gigabytes: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    type: Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
