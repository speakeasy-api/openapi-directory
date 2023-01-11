import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from ..shared import statustype_enum as shared_statustype_enum


@dataclasses.dataclass
class ServiceSpecificCredential:
    r"""ServiceSpecificCredential
    Contains the details of a service-specific credential.
    """
    
    create_date: datetime = dataclasses.field()
    service_name: str = dataclasses.field()
    service_password: str = dataclasses.field()
    service_specific_credential_id: str = dataclasses.field()
    service_user_name: str = dataclasses.field()
    status: shared_statustype_enum.StatusTypeEnum = dataclasses.field()
    user_name: str = dataclasses.field()
    
