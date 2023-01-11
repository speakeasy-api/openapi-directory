import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationcodeconfiguration as shared_applicationcodeconfiguration
from ..shared import applicationsnapshotconfiguration as shared_applicationsnapshotconfiguration
from ..shared import environmentproperties as shared_environmentproperties
from ..shared import flinkapplicationconfiguration as shared_flinkapplicationconfiguration
from ..shared import sqlapplicationconfiguration as shared_sqlapplicationconfiguration
from ..shared import vpcconfiguration as shared_vpcconfiguration
from ..shared import zeppelinapplicationconfiguration as shared_zeppelinapplicationconfiguration


@dataclass_json
@dataclasses.dataclass
class ApplicationConfiguration:
    r"""ApplicationConfiguration
    Specifies the creation parameters for a Kinesis Data Analytics application.
    """
    
    application_code_configuration: Optional[shared_applicationcodeconfiguration.ApplicationCodeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfiguration') }})
    application_snapshot_configuration: Optional[shared_applicationsnapshotconfiguration.ApplicationSnapshotConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfiguration') }})
    environment_properties: Optional[shared_environmentproperties.EnvironmentProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentProperties') }})
    flink_application_configuration: Optional[shared_flinkapplicationconfiguration.FlinkApplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfiguration') }})
    sql_application_configuration: Optional[shared_sqlapplicationconfiguration.SQLApplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfiguration') }})
    vpc_configurations: Optional[list[shared_vpcconfiguration.VpcConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurations') }})
    zeppelin_application_configuration: Optional[shared_zeppelinapplicationconfiguration.ZeppelinApplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfiguration') }})
    
