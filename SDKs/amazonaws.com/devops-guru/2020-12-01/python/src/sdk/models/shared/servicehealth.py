import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceinsighthealth as shared_serviceinsighthealth
from ..shared import servicename_enum as shared_servicename_enum


@dataclass_json
@dataclasses.dataclass
class ServiceHealth:
    r"""ServiceHealth
    Represents the health of an AWS service.
    """
    
    insight: Optional[shared_serviceinsighthealth.ServiceInsightHealth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Insight') }})
    service_name: Optional[shared_servicename_enum.ServiceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    
