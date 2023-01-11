import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class AccessKeyLastUsed:
    r"""AccessKeyLastUsed
    <p>Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
    """
    
    last_used_date: datetime = dataclasses.field()
    region: str = dataclasses.field()
    service_name: str = dataclasses.field()
    
