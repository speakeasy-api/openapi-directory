import dataclasses
from enum import Enum
from ..shared import dimensionvaluesource_enum as shared_dimensionvaluesource_enum


@dataclasses.dataclass
class CloudWatchDimensionConfiguration:
    r"""CloudWatchDimensionConfiguration
    <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p>
    """
    
    default_dimension_value: str = dataclasses.field()
    dimension_name: str = dataclasses.field()
    dimension_value_source: shared_dimensionvaluesource_enum.DimensionValueSourceEnum = dataclasses.field()
    
