import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationconfigurationtemplate as shared_replicationconfigurationtemplate


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationConfigurationTemplatesResponse:
    items: Optional[list[shared_replicationconfigurationtemplate.ReplicationConfigurationTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
