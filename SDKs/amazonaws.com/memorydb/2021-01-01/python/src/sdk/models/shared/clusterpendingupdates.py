import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aclsupdatestatus as shared_aclsupdatestatus
from ..shared import reshardingstatus as shared_reshardingstatus
from ..shared import pendingmodifiedserviceupdate as shared_pendingmodifiedserviceupdate


@dataclass_json
@dataclasses.dataclass
class ClusterPendingUpdates:
    r"""ClusterPendingUpdates
    A list of updates being applied to the cluster
    """
    
    ac_ls: Optional[shared_aclsupdatestatus.AcLsUpdateStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLs') }})
    resharding: Optional[shared_reshardingstatus.ReshardingStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resharding') }})
    service_updates: Optional[list[shared_pendingmodifiedserviceupdate.PendingModifiedServiceUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdates') }})
    
