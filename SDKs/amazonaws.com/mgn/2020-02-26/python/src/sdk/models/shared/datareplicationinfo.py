import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datareplicationerror as shared_datareplicationerror
from ..shared import datareplicationinitiation as shared_datareplicationinitiation
from ..shared import datareplicationstate_enum as shared_datareplicationstate_enum
from ..shared import datareplicationinforeplicateddisk as shared_datareplicationinforeplicateddisk


@dataclass_json
@dataclasses.dataclass
class DataReplicationInfo:
    r"""DataReplicationInfo
    Request data replication info.
    """
    
    data_replication_error: Optional[shared_datareplicationerror.DataReplicationError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationError') }})
    data_replication_initiation: Optional[shared_datareplicationinitiation.DataReplicationInitiation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationInitiation') }})
    data_replication_state: Optional[shared_datareplicationstate_enum.DataReplicationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationState') }})
    eta_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etaDateTime') }})
    lag_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagDuration') }})
    replicated_disks: Optional[list[shared_datareplicationinforeplicateddisk.DataReplicationInfoReplicatedDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicatedDisks') }})
    
