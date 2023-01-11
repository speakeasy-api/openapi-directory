import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class RevisionTargetsList:
    r"""RevisionTargetsList
    Describes a <code>RevisionTarget</code>.
    """
    
    database_revision: Optional[str] = dataclasses.field(default=None)
    database_revision_release_date: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
