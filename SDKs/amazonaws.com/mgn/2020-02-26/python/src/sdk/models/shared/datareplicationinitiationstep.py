import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datareplicationinitiationstepname_enum as shared_datareplicationinitiationstepname_enum
from ..shared import datareplicationinitiationstepstatus_enum as shared_datareplicationinitiationstepstatus_enum


@dataclass_json
@dataclasses.dataclass
class DataReplicationInitiationStep:
    r"""DataReplicationInitiationStep
    Data replication intiation step.
    """
    
    name: Optional[shared_datareplicationinitiationstepname_enum.DataReplicationInitiationStepNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[shared_datareplicationinitiationstepstatus_enum.DataReplicationInitiationStepStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
