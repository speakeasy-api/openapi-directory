import dataclasses
from typing import Optional
from enum import Enum
from ..shared import metric as shared_metric
from ..shared import standardunit_enum as shared_standardunit_enum


@dataclasses.dataclass
class MetricStat:
    r"""MetricStat
    This structure defines the metric to be returned, along with the statistics, period, and units.
    """
    
    metric: shared_metric.Metric = dataclasses.field()
    period: int = dataclasses.field()
    stat: str = dataclasses.field()
    unit: Optional[shared_standardunit_enum.StandardUnitEnum] = dataclasses.field(default=None)
    
