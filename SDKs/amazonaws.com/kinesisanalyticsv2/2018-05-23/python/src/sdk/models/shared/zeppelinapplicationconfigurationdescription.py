import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogconfigurationdescription as shared_catalogconfigurationdescription
from ..shared import customartifactconfigurationdescription as shared_customartifactconfigurationdescription
from ..shared import deployasapplicationconfigurationdescription as shared_deployasapplicationconfigurationdescription
from ..shared import zeppelinmonitoringconfigurationdescription as shared_zeppelinmonitoringconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class ZeppelinApplicationConfigurationDescription:
    r"""ZeppelinApplicationConfigurationDescription
    The configuration of a Kinesis Data Analytics Studio notebook.
    """
    
    monitoring_configuration_description: shared_zeppelinmonitoringconfigurationdescription.ZeppelinMonitoringConfigurationDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationDescription') }})
    catalog_configuration_description: Optional[shared_catalogconfigurationdescription.CatalogConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfigurationDescription') }})
    custom_artifacts_configuration_description: Optional[list[shared_customartifactconfigurationdescription.CustomArtifactConfigurationDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfigurationDescription') }})
    deploy_as_application_configuration_description: Optional[shared_deployasapplicationconfigurationdescription.DeployAsApplicationConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfigurationDescription') }})
    
