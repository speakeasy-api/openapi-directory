import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cluster as shared_cluster


@dataclass_json
@dataclasses.dataclass
class UpdateClusterResponse:
    cluster: Optional[shared_cluster.Cluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    
