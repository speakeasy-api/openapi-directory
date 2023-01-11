import dataclasses
from typing import Optional
from ..shared import availabilityoptionsstatus as shared_availabilityoptionsstatus


@dataclasses.dataclass
class DescribeAvailabilityOptionsResponse:
    r"""DescribeAvailabilityOptionsResponse
    The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. 
    """
    
    availability_options: Optional[shared_availabilityoptionsstatus.AvailabilityOptionsStatus] = dataclasses.field(default=None)
    
