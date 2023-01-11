import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMetricWidgetImageOutput:
    metric_widget_image: Optional[str] = dataclasses.field(default=None)
    
