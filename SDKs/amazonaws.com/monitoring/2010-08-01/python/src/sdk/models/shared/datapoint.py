import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import standardunit_enum as shared_standardunit_enum


@dataclasses.dataclass
class Datapoint:
    r"""Datapoint
    Encapsulates the statistical data that CloudWatch computes from metric data.
    """
    
    average: Optional[float] = dataclasses.field(default=None)
    extended_statistics: Optional[dict[str, float]] = dataclasses.field(default=None)
    maximum: Optional[float] = dataclasses.field(default=None)
    minimum: Optional[float] = dataclasses.field(default=None)
    sample_count: Optional[float] = dataclasses.field(default=None)
    sum: Optional[float] = dataclasses.field(default=None)
    timestamp: Optional[datetime] = dataclasses.field(default=None)
    unit: Optional[shared_standardunit_enum.StandardUnitEnum] = dataclasses.field(default=None)
    
