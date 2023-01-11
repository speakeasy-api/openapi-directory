import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class CapacityForecast:
    r"""CapacityForecast
    A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points. 
    """
    
    timestamps: list[datetime] = dataclasses.field()
    values: list[float] = dataclasses.field()
    
