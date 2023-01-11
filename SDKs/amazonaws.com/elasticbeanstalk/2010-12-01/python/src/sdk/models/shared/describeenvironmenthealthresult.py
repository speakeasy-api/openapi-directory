import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import applicationmetrics as shared_applicationmetrics
from ..shared import instancehealthsummary as shared_instancehealthsummary
from ..shared import environmenthealth_enum as shared_environmenthealth_enum


@dataclasses.dataclass
class DescribeEnvironmentHealthResult:
    r"""DescribeEnvironmentHealthResult
    Health details for an AWS Elastic Beanstalk environment.
    """
    
    application_metrics: Optional[shared_applicationmetrics.ApplicationMetrics] = dataclasses.field(default=None)
    causes: Optional[list[str]] = dataclasses.field(default=None)
    color: Optional[str] = dataclasses.field(default=None)
    environment_name: Optional[str] = dataclasses.field(default=None)
    health_status: Optional[str] = dataclasses.field(default=None)
    instances_health: Optional[shared_instancehealthsummary.InstanceHealthSummary] = dataclasses.field(default=None)
    refreshed_at: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[shared_environmenthealth_enum.EnvironmentHealthEnum] = dataclasses.field(default=None)
    
