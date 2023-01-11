import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import availabilityoptionsstatus as shared_availabilityoptionsstatus


@dataclasses.dataclass
class UpdateAvailabilityOptionsResponse:
    r"""UpdateAvailabilityOptionsResponse
    The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. 
    """
    
    availability_options: Optional[shared_availabilityoptionsstatus.AvailabilityOptionsStatus] = dataclasses.field(default=None)
    
