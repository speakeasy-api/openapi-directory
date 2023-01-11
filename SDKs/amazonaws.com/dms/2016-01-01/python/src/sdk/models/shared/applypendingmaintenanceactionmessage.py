import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApplyPendingMaintenanceActionMessage:
    r"""ApplyPendingMaintenanceActionMessage
    <p/>
    """
    
    apply_action: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyAction') }})
    opt_in_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptInType') }})
    replication_instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    
