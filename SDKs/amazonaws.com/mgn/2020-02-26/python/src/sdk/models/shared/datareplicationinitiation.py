import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datareplicationinitiationstep as shared_datareplicationinitiationstep


@dataclass_json
@dataclasses.dataclass
class DataReplicationInitiation:
    r"""DataReplicationInitiation
    Data replication initiation.
    """
    
    next_attempt_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextAttemptDateTime') }})
    start_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime') }})
    steps: Optional[list[shared_datareplicationinitiationstep.DataReplicationInitiationStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
