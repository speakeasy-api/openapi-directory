import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum(str, Enum):
    PENDING = "pending"
    VERIFIED = "verified"
    ERROR = "error"

class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclasses.dataclass
class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_names') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_after: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_after'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sha1_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1_fingerprint') }})
    state: Optional[Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
