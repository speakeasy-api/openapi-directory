import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicepowername_enum as shared_containerservicepowername_enum


@dataclass_json
@dataclasses.dataclass
class UpdateContainerServiceRequest:
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    is_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisabled') }})
    power: Optional[shared_containerservicepowername_enum.ContainerServicePowerNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    public_domain_names: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomainNames') }})
    scale: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    
