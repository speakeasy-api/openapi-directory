import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class InvalidationSummaryList:
    r"""InvalidationSummaryList
    A summary of an invalidation request.
    """
    
    create_time: datetime = dataclasses.field()
    id: str = dataclasses.field()
    status: str = dataclasses.field()
    
