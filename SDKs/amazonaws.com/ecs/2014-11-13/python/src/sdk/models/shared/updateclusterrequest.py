import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterconfiguration as shared_clusterconfiguration
from ..shared import clustersetting as shared_clustersetting


@dataclass_json
@dataclasses.dataclass
class UpdateClusterRequest:
    cluster: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    configuration: Optional[shared_clusterconfiguration.ClusterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    settings: Optional[list[shared_clustersetting.ClusterSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
