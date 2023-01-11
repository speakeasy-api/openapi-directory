import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogconfigurationupdate as shared_catalogconfigurationupdate
from ..shared import customartifactconfiguration as shared_customartifactconfiguration
from ..shared import deployasapplicationconfigurationupdate as shared_deployasapplicationconfigurationupdate
from ..shared import zeppelinmonitoringconfigurationupdate as shared_zeppelinmonitoringconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class ZeppelinApplicationConfigurationUpdate:
    r"""ZeppelinApplicationConfigurationUpdate
    Updates to the configuration of Kinesis Data Analytics Studio notebook.
    """
    
    catalog_configuration_update: Optional[shared_catalogconfigurationupdate.CatalogConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogConfigurationUpdate') }})
    custom_artifacts_configuration_update: Optional[list[shared_customartifactconfiguration.CustomArtifactConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomArtifactsConfigurationUpdate') }})
    deploy_as_application_configuration_update: Optional[shared_deployasapplicationconfigurationupdate.DeployAsApplicationConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeployAsApplicationConfigurationUpdate') }})
    monitoring_configuration_update: Optional[shared_zeppelinmonitoringconfigurationupdate.ZeppelinMonitoringConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationUpdate') }})
    
