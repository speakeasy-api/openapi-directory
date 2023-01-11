import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcekey as shared_resourcekey
from ..shared import remediationexecutionstate_enum as shared_remediationexecutionstate_enum
from ..shared import remediationexecutionstep as shared_remediationexecutionstep


@dataclass_json
@dataclasses.dataclass
class RemediationExecutionStatus:
    r"""RemediationExecutionStatus
    Provides details of the current status of the invoked remediation action for that resource.
    """
    
    invocation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_key: Optional[shared_resourcekey.ResourceKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKey') }})
    state: Optional[shared_remediationexecutionstate_enum.RemediationExecutionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    step_details: Optional[list[shared_remediationexecutionstep.RemediationExecutionStep]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepDetails') }})
    
