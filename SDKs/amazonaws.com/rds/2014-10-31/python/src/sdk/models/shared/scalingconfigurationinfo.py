import dataclasses
from typing import Optional


@dataclasses.dataclass
class ScalingConfigurationInfo:
    r"""ScalingConfigurationInfo
    <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
    """
    
    auto_pause: Optional[bool] = dataclasses.field(default=None)
    max_capacity: Optional[int] = dataclasses.field(default=None)
    min_capacity: Optional[int] = dataclasses.field(default=None)
    seconds_before_timeout: Optional[int] = dataclasses.field(default=None)
    seconds_until_auto_pause: Optional[int] = dataclasses.field(default=None)
    timeout_action: Optional[str] = dataclasses.field(default=None)
    
