import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceupdaterequest as shared_serviceupdaterequest


@dataclass_json
@dataclasses.dataclass
class BatchUpdateClusterRequest:
    cluster_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterNames') }})
    service_update: Optional[shared_serviceupdaterequest.ServiceUpdateRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdate') }})
    
