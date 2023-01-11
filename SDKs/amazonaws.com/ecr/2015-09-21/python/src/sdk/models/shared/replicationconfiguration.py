import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationrule as shared_replicationrule


@dataclass_json
@dataclasses.dataclass
class ReplicationConfiguration:
    r"""ReplicationConfiguration
    The replication configuration for a registry.
    """
    
    rules: list[shared_replicationrule.ReplicationRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
