import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclelastcutover as shared_lifecyclelastcutover
from ..shared import lifecyclelasttest as shared_lifecyclelasttest
from ..shared import lifecyclestate_enum as shared_lifecyclestate_enum


@dataclass_json
@dataclasses.dataclass
class LifeCycle:
    r"""LifeCycle
    Lifecycle.
    """
    
    added_to_service_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedToServiceDateTime') }})
    elapsed_replication_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedReplicationDuration') }})
    first_byte_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstByteDateTime') }})
    last_cutover: Optional[shared_lifecyclelastcutover.LifeCycleLastCutover] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCutover') }})
    last_seen_by_service_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeenByServiceDateTime') }})
    last_test: Optional[shared_lifecyclelasttest.LifeCycleLastTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTest') }})
    state: Optional[shared_lifecyclestate_enum.LifeCycleStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
