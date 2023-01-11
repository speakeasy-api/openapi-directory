import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import environmentinfotype_enum as shared_environmentinfotype_enum


@dataclasses.dataclass
class EnvironmentInfoDescription:
    r"""EnvironmentInfoDescription
    The information retrieved from the Amazon EC2 instances.
    """
    
    ec2_instance_id: Optional[str] = dataclasses.field(default=None)
    info_type: Optional[shared_environmentinfotype_enum.EnvironmentInfoTypeEnum] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    sample_timestamp: Optional[datetime] = dataclasses.field(default=None)
    
