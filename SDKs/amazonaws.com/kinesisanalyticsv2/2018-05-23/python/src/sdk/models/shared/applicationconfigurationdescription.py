import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationcodeconfigurationdescription as shared_applicationcodeconfigurationdescription
from ..shared import applicationsnapshotconfigurationdescription as shared_applicationsnapshotconfigurationdescription
from ..shared import environmentpropertydescriptions as shared_environmentpropertydescriptions
from ..shared import flinkapplicationconfigurationdescription as shared_flinkapplicationconfigurationdescription
from ..shared import runconfigurationdescription as shared_runconfigurationdescription
from ..shared import sqlapplicationconfigurationdescription as shared_sqlapplicationconfigurationdescription
from ..shared import vpcconfigurationdescription as shared_vpcconfigurationdescription
from ..shared import zeppelinapplicationconfigurationdescription as shared_zeppelinapplicationconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class ApplicationConfigurationDescription:
    r"""ApplicationConfigurationDescription
    Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
    """
    
    application_code_configuration_description: Optional[shared_applicationcodeconfigurationdescription.ApplicationCodeConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCodeConfigurationDescription') }})
    application_snapshot_configuration_description: Optional[shared_applicationsnapshotconfigurationdescription.ApplicationSnapshotConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSnapshotConfigurationDescription') }})
    environment_property_descriptions: Optional[shared_environmentpropertydescriptions.EnvironmentPropertyDescriptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentPropertyDescriptions') }})
    flink_application_configuration_description: Optional[shared_flinkapplicationconfigurationdescription.FlinkApplicationConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkApplicationConfigurationDescription') }})
    run_configuration_description: Optional[shared_runconfigurationdescription.RunConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfigurationDescription') }})
    sql_application_configuration_description: Optional[shared_sqlapplicationconfigurationdescription.SQLApplicationConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlApplicationConfigurationDescription') }})
    vpc_configuration_descriptions: Optional[list[shared_vpcconfigurationdescription.VpcConfigurationDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescriptions') }})
    zeppelin_application_configuration_description: Optional[shared_zeppelinapplicationconfigurationdescription.ZeppelinApplicationConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZeppelinApplicationConfigurationDescription') }})
    
