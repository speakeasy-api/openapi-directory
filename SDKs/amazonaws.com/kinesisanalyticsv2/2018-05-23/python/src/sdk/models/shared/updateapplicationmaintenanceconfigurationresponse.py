import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationmaintenanceconfigurationdescription as shared_applicationmaintenanceconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationMaintenanceConfigurationResponse:
    application_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_maintenance_configuration_description: Optional[shared_applicationmaintenanceconfigurationdescription.ApplicationMaintenanceConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceConfigurationDescription') }})
    
