import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstanceHealthSummary:
    r"""InstanceHealthSummary
    Represents summary information about the health of an instance. For more information, see <a href=\"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html\">Health Colors and Statuses</a>.
    """
    
    degraded: Optional[int] = dataclasses.field(default=None)
    info: Optional[int] = dataclasses.field(default=None)
    no_data: Optional[int] = dataclasses.field(default=None)
    ok: Optional[int] = dataclasses.field(default=None)
    pending: Optional[int] = dataclasses.field(default=None)
    severe: Optional[int] = dataclasses.field(default=None)
    unknown: Optional[int] = dataclasses.field(default=None)
    warning: Optional[int] = dataclasses.field(default=None)
    
