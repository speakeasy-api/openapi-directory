import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceconnectortype_enum as shared_sourceconnectortype_enum
from ..shared import incrementalpullconfig as shared_incrementalpullconfig
from ..shared import sourceconnectorproperties as shared_sourceconnectorproperties


@dataclass_json
@dataclasses.dataclass
class SourceFlowConfig:
    r"""SourceFlowConfig
    Contains information about the configuration of the source connector used in the flow.
    """
    
    connector_type: shared_sourceconnectortype_enum.SourceConnectorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorType') }})
    source_connector_properties: shared_sourceconnectorproperties.SourceConnectorProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConnectorProperties') }})
    connector_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorProfileName') }})
    incremental_pull_config: Optional[shared_incrementalpullconfig.IncrementalPullConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalPullConfig') }})
    
