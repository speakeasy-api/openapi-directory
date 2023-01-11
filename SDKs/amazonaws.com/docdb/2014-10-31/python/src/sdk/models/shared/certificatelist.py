import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class CertificateList:
    r"""CertificateList
    A certificate authority (CA) certificate for an account.
    """
    
    certificate_arn: Optional[str] = dataclasses.field(default=None)
    certificate_identifier: Optional[str] = dataclasses.field(default=None)
    certificate_type: Optional[str] = dataclasses.field(default=None)
    thumbprint: Optional[str] = dataclasses.field(default=None)
    valid_from: Optional[datetime] = dataclasses.field(default=None)
    valid_till: Optional[datetime] = dataclasses.field(default=None)
    
