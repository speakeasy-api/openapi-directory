import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Deployment:
    r"""Deployment
    Information about an application version deployment.
    """
    
    deployment_id: Optional[int] = dataclasses.field(default=None)
    deployment_time: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    version_label: Optional[str] = dataclasses.field(default=None)
    
