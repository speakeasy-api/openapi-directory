import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import radiussettings as shared_radiussettings


@dataclass_json
@dataclasses.dataclass
class UpdateRadiusRequest:
    r"""UpdateRadiusRequest
    Contains the inputs for the <a>UpdateRadius</a> operation.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    radius_settings: shared_radiussettings.RadiusSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    
