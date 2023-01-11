import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Certificate:
    r"""Certificate
    A CA certificate for an Amazon Web Services account.
    """
    
    certificate_arn: Optional[str] = dataclasses.field(default=None)
    certificate_identifier: Optional[str] = dataclasses.field(default=None)
    certificate_type: Optional[str] = dataclasses.field(default=None)
    customer_override: Optional[bool] = dataclasses.field(default=None)
    customer_override_valid_till: Optional[datetime] = dataclasses.field(default=None)
    thumbprint: Optional[str] = dataclasses.field(default=None)
    valid_from: Optional[datetime] = dataclasses.field(default=None)
    valid_till: Optional[datetime] = dataclasses.field(default=None)
    
