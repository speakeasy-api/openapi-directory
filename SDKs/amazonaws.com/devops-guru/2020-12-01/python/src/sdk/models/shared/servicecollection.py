import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicename_enum as shared_servicename_enum


@dataclass_json
@dataclasses.dataclass
class ServiceCollection:
    r"""ServiceCollection
    A collection of the names of AWS services.
    """
    
    service_names: Optional[list[shared_servicename_enum.ServiceNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNames') }})
    
