import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerinstancestatus_enum as shared_containerinstancestatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateContainerInstancesStateRequest:
    container_instances: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    status: shared_containerinstancestatus_enum.ContainerInstanceStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    
