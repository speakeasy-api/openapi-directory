import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class MfaDevice:
    r"""MfaDevice
    <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
    """
    
    enable_date: datetime = dataclasses.field()
    serial_number: str = dataclasses.field()
    user_name: str = dataclasses.field()
    
