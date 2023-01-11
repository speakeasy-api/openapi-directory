import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalyinstance as shared_anomalyinstance
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class Anomaly:
    r"""Anomaly
     Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
    """
    
    instances: list[shared_anomalyinstance.AnomalyInstance] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    metric: shared_metric.Metric = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
