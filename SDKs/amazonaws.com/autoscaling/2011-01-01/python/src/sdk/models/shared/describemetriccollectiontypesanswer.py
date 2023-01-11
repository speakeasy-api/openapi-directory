import dataclasses
from typing import Optional
from ..shared import metricgranularitytype as shared_metricgranularitytype
from ..shared import metriccollectiontype as shared_metriccollectiontype


@dataclasses.dataclass
class DescribeMetricCollectionTypesAnswer:
    granularities: Optional[list[shared_metricgranularitytype.MetricGranularityType]] = dataclasses.field(default=None)
    metrics: Optional[list[shared_metriccollectiontype.MetricCollectionType]] = dataclasses.field(default=None)
    
