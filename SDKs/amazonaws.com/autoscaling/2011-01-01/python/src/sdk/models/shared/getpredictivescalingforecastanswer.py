import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import capacityforecast as shared_capacityforecast
from ..shared import loadforecast as shared_loadforecast


@dataclasses.dataclass
class GetPredictiveScalingForecastAnswer:
    capacity_forecast: shared_capacityforecast.CapacityForecast = dataclasses.field()
    load_forecast: list[shared_loadforecast.LoadForecast] = dataclasses.field()
    update_time: datetime = dataclasses.field()
    
