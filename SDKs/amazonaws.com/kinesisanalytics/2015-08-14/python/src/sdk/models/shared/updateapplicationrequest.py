import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationupdate as shared_applicationupdate


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_update: shared_applicationupdate.ApplicationUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationUpdate') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    
