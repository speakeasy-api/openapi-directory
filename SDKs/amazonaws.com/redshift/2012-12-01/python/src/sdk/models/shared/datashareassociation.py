import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import datasharestatus_enum as shared_datasharestatus_enum


@dataclasses.dataclass
class DataShareAssociation:
    r"""DataShareAssociation
    The association of a datashare from a producer account with a data consumer. 
    """
    
    consumer_identifier: Optional[str] = dataclasses.field(default=None)
    created_date: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[shared_datasharestatus_enum.DataShareStatusEnum] = dataclasses.field(default=None)
    status_change_date: Optional[datetime] = dataclasses.field(default=None)
    
