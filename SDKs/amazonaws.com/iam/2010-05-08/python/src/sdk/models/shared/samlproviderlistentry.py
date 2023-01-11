import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SamlProviderListEntry:
    r"""SamlProviderListEntry
    Contains the list of SAML providers for this account.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    valid_until: Optional[datetime] = dataclasses.field(default=None)
    
