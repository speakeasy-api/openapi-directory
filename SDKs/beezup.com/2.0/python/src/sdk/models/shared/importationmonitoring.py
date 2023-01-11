import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_usererrormessage as shared_beezup_common_usererrormessage
from ..shared import importationmonitoringlinks as shared_importationmonitoringlinks


@dataclass_json
@dataclasses.dataclass
class ImportationMonitoring:
    r"""ImportationMonitoring
    Describe the reporting of the catalog importation
    """
    
    begin_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    last_update_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    steps: dict[str, bool] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    errors: Optional[list[shared_beezup_common_usererrormessage.BeezUpCommonUserErrorMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: Optional[shared_importationmonitoringlinks.ImportationMonitoringLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
