import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import metricstreamfilter as shared_metricstreamfilter
from ..shared import metricstreamoutputformat_enum as shared_metricstreamoutputformat_enum


@dataclasses.dataclass
class GetMetricStreamOutput:
    arn: Optional[str] = dataclasses.field(default=None)
    creation_date: Optional[datetime] = dataclasses.field(default=None)
    exclude_filters: Optional[list[shared_metricstreamfilter.MetricStreamFilter]] = dataclasses.field(default=None)
    firehose_arn: Optional[str] = dataclasses.field(default=None)
    include_filters: Optional[list[shared_metricstreamfilter.MetricStreamFilter]] = dataclasses.field(default=None)
    last_update_date: Optional[datetime] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    output_format: Optional[shared_metricstreamoutputformat_enum.MetricStreamOutputFormatEnum] = dataclasses.field(default=None)
    role_arn: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    
