import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogconfiguration as shared_catalogconfiguration
from ..shared import customartifactconfiguration as shared_customartifactconfiguration
from ..shared import deployasapplicationconfiguration as shared_deployasapplicationconfiguration
from ..shared import zeppelinmonitoringconfiguration as shared_zeppelinmonitoringconfiguration


@dataclass_json
@dataclasses.dataclass
class ZeppelinApplicationConfiguration:
    r"""ZeppelinApplicationConfiguration
    The configuration of a Kinesis Data Analytics Studio notebook.
    """
    
    catalog_configuration: Optional[shared_catalogconfiguration.CatalogConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfiguration') }})
    custom_artifacts_configuration: Optional[list[shared_customartifactconfiguration.CustomArtifactConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfiguration') }})
    deploy_as_application_configuration: Optional[shared_deployasapplicationconfiguration.DeployAsApplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfiguration') }})
    monitoring_configuration: Optional[shared_zeppelinmonitoringconfiguration.ZeppelinMonitoringConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfiguration') }})
    
