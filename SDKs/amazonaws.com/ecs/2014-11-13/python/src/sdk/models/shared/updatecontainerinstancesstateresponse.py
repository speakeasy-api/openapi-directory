import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerinstance as shared_containerinstance
from ..shared import failure as shared_failure


@dataclass_json
@dataclasses.dataclass
class UpdateContainerInstancesStateResponse:
    container_instances: Optional[list[shared_containerinstance.ContainerInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    failures: Optional[list[shared_failure.Failure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    
