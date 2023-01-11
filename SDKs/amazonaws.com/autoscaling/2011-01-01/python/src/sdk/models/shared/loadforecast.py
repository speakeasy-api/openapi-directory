import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import predictivescalingmetricspecification as shared_predictivescalingmetricspecification


@dataclasses.dataclass
class LoadForecast:
    r"""LoadForecast
    A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification. 
    """
    
    metric_specification: shared_predictivescalingmetricspecification.PredictiveScalingMetricSpecification = dataclasses.field()
    timestamps: list[datetime] = dataclasses.field()
    values: list[float] = dataclasses.field()
    
