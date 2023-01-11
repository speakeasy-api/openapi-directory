import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import messagedata as shared_messagedata
from ..shared import statuscode_enum as shared_statuscode_enum


@dataclasses.dataclass
class MetricDataResult:
    r"""MetricDataResult
    A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    label: Optional[str] = dataclasses.field(default=None)
    messages: Optional[list[shared_messagedata.MessageData]] = dataclasses.field(default=None)
    status_code: Optional[shared_statuscode_enum.StatusCodeEnum] = dataclasses.field(default=None)
    timestamps: Optional[list[datetime]] = dataclasses.field(default=None)
    values: Optional[list[float]] = dataclasses.field(default=None)
    
