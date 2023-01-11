import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class TemplateMetadata:
    r"""TemplateMetadata
    Contains information about an email template.
    """
    
    created_timestamp: Optional[datetime] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    
