import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class Range:
    r"""Range
    Specifies one range of days or times to exclude from use for training an anomaly detection model.
    """
    
    end_time: datetime = dataclasses.field()
    start_time: datetime = dataclasses.field()
    
