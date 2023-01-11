import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApplicationMaintenanceConfigurationUpdate:
    r"""ApplicationMaintenanceConfigurationUpdate
    Describes the updated maintenance configuration for the application.
    """
    
    application_maintenance_window_start_time_update: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceWindowStartTimeUpdate') }})
    
