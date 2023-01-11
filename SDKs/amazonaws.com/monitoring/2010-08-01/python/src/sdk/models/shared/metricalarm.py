import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import dimension as shared_dimension
from ..shared import metricdataquery as shared_metricdataquery
from ..shared import statevalue_enum as shared_statevalue_enum
from ..shared import statistic_enum as shared_statistic_enum
from ..shared import standardunit_enum as shared_standardunit_enum


@dataclasses.dataclass
class MetricAlarm:
    r"""MetricAlarm
    The details about a metric alarm.
    """
    
    actions_enabled: Optional[bool] = dataclasses.field(default=None)
    alarm_actions: Optional[list[str]] = dataclasses.field(default=None)
    alarm_arn: Optional[str] = dataclasses.field(default=None)
    alarm_configuration_updated_timestamp: Optional[datetime] = dataclasses.field(default=None)
    alarm_description: Optional[str] = dataclasses.field(default=None)
    alarm_name: Optional[str] = dataclasses.field(default=None)
    comparison_operator: Optional[shared_comparisonoperator_enum.ComparisonOperatorEnum] = dataclasses.field(default=None)
    datapoints_to_alarm: Optional[int] = dataclasses.field(default=None)
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None)
    evaluate_low_sample_count_percentile: Optional[str] = dataclasses.field(default=None)
    evaluation_periods: Optional[int] = dataclasses.field(default=None)
    extended_statistic: Optional[str] = dataclasses.field(default=None)
    insufficient_data_actions: Optional[list[str]] = dataclasses.field(default=None)
    metric_name: Optional[str] = dataclasses.field(default=None)
    metrics: Optional[list[shared_metricdataquery.MetricDataQuery]] = dataclasses.field(default=None)
    namespace: Optional[str] = dataclasses.field(default=None)
    ok_actions: Optional[list[str]] = dataclasses.field(default=None)
    period: Optional[int] = dataclasses.field(default=None)
    state_reason: Optional[str] = dataclasses.field(default=None)
    state_reason_data: Optional[str] = dataclasses.field(default=None)
    state_updated_timestamp: Optional[datetime] = dataclasses.field(default=None)
    state_value: Optional[shared_statevalue_enum.StateValueEnum] = dataclasses.field(default=None)
    statistic: Optional[shared_statistic_enum.StatisticEnum] = dataclasses.field(default=None)
    threshold: Optional[float] = dataclasses.field(default=None)
    threshold_metric_id: Optional[str] = dataclasses.field(default=None)
    treat_missing_data: Optional[str] = dataclasses.field(default=None)
    unit: Optional[shared_standardunit_enum.StandardUnitEnum] = dataclasses.field(default=None)
    
