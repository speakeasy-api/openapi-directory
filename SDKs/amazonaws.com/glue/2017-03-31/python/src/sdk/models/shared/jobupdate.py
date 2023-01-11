import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobcommand as shared_jobcommand
from ..shared import connectionslist as shared_connectionslist
from ..shared import executionproperty as shared_executionproperty
from ..shared import notificationproperty as shared_notificationproperty
from ..shared import workertype_enum as shared_workertype_enum


@dataclass_json
@dataclasses.dataclass
class JobUpdate:
    r"""JobUpdate
    Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
    """
    
    allocated_capacity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedCapacity') }})
    command: Optional[shared_jobcommand.JobCommand] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    connections: Optional[shared_connectionslist.ConnectionsList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connections') }})
    default_arguments: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultArguments') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    execution_property: Optional[shared_executionproperty.ExecutionProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionProperty') }})
    glue_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueVersion') }})
    log_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogUri') }})
    max_capacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    max_retries: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRetries') }})
    non_overridable_arguments: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonOverridableArguments') }})
    notification_property: Optional[shared_notificationproperty.NotificationProperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationProperty') }})
    number_of_workers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfWorkers') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    security_configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    worker_type: Optional[shared_workertype_enum.WorkerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerType') }})
    
