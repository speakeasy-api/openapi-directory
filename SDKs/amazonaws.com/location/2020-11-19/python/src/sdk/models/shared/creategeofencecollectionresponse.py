import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateGeofenceCollectionResponse:
    collection_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionArn') }})
    collection_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionName') }})
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
