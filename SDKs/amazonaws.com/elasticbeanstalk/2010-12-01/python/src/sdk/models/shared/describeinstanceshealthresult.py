import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import singleinstancehealth as shared_singleinstancehealth


@dataclasses.dataclass
class DescribeInstancesHealthResult:
    r"""DescribeInstancesHealthResult
    Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
    """
    
    instance_health_list: Optional[list[shared_singleinstancehealth.SingleInstanceHealth]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    refreshed_at: Optional[datetime] = dataclasses.field(default=None)
    
