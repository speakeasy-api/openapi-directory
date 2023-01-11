import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataflowendpoint as shared_dataflowendpoint
from ..shared import securitydetails as shared_securitydetails


@dataclass_json
@dataclasses.dataclass
class EndpointDetails:
    r"""EndpointDetails
    Information about the endpoint details.
    """
    
    endpoint: Optional[shared_dataflowendpoint.DataflowEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    security_details: Optional[shared_securitydetails.SecurityDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityDetails') }})
    
