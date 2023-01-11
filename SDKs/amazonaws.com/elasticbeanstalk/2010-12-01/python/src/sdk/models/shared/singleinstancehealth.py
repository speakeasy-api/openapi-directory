import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import applicationmetrics as shared_applicationmetrics
from ..shared import deployment as shared_deployment
from ..shared import systemstatus as shared_systemstatus


@dataclasses.dataclass
class SingleInstanceHealth:
    r"""SingleInstanceHealth
    Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
    """
    
    application_metrics: Optional[shared_applicationmetrics.ApplicationMetrics] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    causes: Optional[list[str]] = dataclasses.field(default=None)
    color: Optional[str] = dataclasses.field(default=None)
    deployment: Optional[shared_deployment.Deployment] = dataclasses.field(default=None)
    health_status: Optional[str] = dataclasses.field(default=None)
    instance_id: Optional[str] = dataclasses.field(default=None)
    instance_type: Optional[str] = dataclasses.field(default=None)
    launched_at: Optional[datetime] = dataclasses.field(default=None)
    system: Optional[shared_systemstatus.SystemStatus] = dataclasses.field(default=None)
    
