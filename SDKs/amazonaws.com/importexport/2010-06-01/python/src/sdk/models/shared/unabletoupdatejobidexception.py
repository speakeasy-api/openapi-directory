import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class UnableToUpdateJobIDException:
    r"""UnableToUpdateJobIDException
    AWS Import/Export cannot update the job
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
