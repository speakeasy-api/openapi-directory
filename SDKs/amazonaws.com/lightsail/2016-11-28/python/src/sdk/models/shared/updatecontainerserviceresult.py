import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservice as shared_containerservice


@dataclass_json
@dataclasses.dataclass
class UpdateContainerServiceResult:
    container_service: Optional[shared_containerservice.ContainerService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerService') }})
    
