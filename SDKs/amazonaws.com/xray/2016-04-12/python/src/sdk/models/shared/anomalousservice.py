import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceid as shared_serviceid


@dataclass_json
@dataclasses.dataclass
class AnomalousService:
    r"""AnomalousService
    The service within the service graph that has anomalously high fault rates. 
    """
    
    service_id: Optional[shared_serviceid.ServiceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    
