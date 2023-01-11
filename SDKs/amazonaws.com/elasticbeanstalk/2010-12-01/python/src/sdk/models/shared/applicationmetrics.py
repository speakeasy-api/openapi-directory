import dataclasses
from typing import Optional
from ..shared import latency as shared_latency
from ..shared import statuscodes as shared_statuscodes


@dataclasses.dataclass
class ApplicationMetrics:
    r"""ApplicationMetrics
    Application request metrics for an AWS Elastic Beanstalk environment.
    """
    
    duration: Optional[int] = dataclasses.field(default=None)
    latency: Optional[shared_latency.Latency] = dataclasses.field(default=None)
    request_count: Optional[int] = dataclasses.field(default=None)
    status_codes: Optional[shared_statuscodes.StatusCodes] = dataclasses.field(default=None)
    
