import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clustersettingname_enum as shared_clustersettingname_enum


@dataclass_json
@dataclasses.dataclass
class ClusterSetting:
    r"""ClusterSetting
    The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.
    """
    
    name: Optional[shared_clustersettingname_enum.ClusterSettingNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
