import dataclasses
from ..shared import statuscodes as shared_statuscodes


@dataclasses.dataclass
class OriginGroupFailoverCriteria:
    r"""OriginGroupFailoverCriteria
    A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
    """
    
    status_codes: shared_statuscodes.StatusCodes = dataclasses.field()
    
