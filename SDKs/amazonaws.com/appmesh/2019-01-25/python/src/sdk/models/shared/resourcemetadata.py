import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResourceMetadata:
    r"""ResourceMetadata
    An object that represents metadata for a resource.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mesh_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshOwner') }})
    resource_owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwner') }})
    uid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
