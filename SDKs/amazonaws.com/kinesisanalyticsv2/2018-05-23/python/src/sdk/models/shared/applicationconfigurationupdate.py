import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationcodeconfigurationupdate as shared_applicationcodeconfigurationupdate
from ..shared import applicationsnapshotconfigurationupdate as shared_applicationsnapshotconfigurationupdate
from ..shared import environmentpropertyupdates as shared_environmentpropertyupdates
from ..shared import flinkapplicationconfigurationupdate as shared_flinkapplicationconfigurationupdate
from ..shared import sqlapplicationconfigurationupdate as shared_sqlapplicationconfigurationupdate
from ..shared import vpcconfigurationupdate as shared_vpcconfigurationupdate
from ..shared import zeppelinapplicationconfigurationupdate as shared_zeppelinapplicationconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class ApplicationConfigurationUpdate:
    r"""ApplicationConfigurationUpdate
    Describes updates to an application's configuration.
    """
    
    application_code_configuration_update: Optional[shared_applicationcodeconfigurationupdate.ApplicationCodeConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfigurationUpdate') }})
    application_snapshot_configuration_update: Optional[shared_applicationsnapshotconfigurationupdate.ApplicationSnapshotConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfigurationUpdate') }})
    environment_property_updates: Optional[shared_environmentpropertyupdates.EnvironmentPropertyUpdates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentPropertyUpdates') }})
    flink_application_configuration_update: Optional[shared_flinkapplicationconfigurationupdate.FlinkApplicationConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfigurationUpdate') }})
    sql_application_configuration_update: Optional[shared_sqlapplicationconfigurationupdate.SQLApplicationConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfigurationUpdate') }})
    vpc_configuration_updates: Optional[list[shared_vpcconfigurationupdate.VpcConfigurationUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationUpdates') }})
    zeppelin_application_configuration_update: Optional[shared_zeppelinapplicationconfigurationupdate.ZeppelinApplicationConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfigurationUpdate') }})
    
