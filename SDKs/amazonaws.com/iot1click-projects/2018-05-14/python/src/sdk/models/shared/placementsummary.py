import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PlacementSummary:
    r"""PlacementSummary
    An object providing summary information for a particular placement.
    """
    
    created_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    placement_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementName') }})
    project_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    updated_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
