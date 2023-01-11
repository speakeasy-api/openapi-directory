import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartOnDemandReplicationRunRequest:
    replication_job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
