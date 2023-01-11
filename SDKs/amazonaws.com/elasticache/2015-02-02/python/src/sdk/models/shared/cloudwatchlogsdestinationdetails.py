import dataclasses
from typing import Optional


@dataclasses.dataclass
class CloudWatchLogsDestinationDetails:
    r"""CloudWatchLogsDestinationDetails
    The configuration details of the CloudWatch Logs destination.
    """
    
    log_group: Optional[str] = dataclasses.field(default=None)
    
