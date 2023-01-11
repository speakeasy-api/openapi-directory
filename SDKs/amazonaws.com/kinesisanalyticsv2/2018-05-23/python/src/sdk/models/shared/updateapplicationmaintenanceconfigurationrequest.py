import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationmaintenanceconfigurationupdate as shared_applicationmaintenanceconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationMaintenanceConfigurationRequest:
    application_maintenance_configuration_update: shared_applicationmaintenanceconfigurationupdate.ApplicationMaintenanceConfigurationUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceConfigurationUpdate') }})
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    
