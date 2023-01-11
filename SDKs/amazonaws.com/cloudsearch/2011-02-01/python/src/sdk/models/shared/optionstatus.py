import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import optionstate_enum as shared_optionstate_enum


@dataclasses.dataclass
class OptionStatus:
    r"""OptionStatus
    The status of an option, including when it was last updated and whether it is actively in use for searches.
    """
    
    creation_date: datetime = dataclasses.field()
    state: shared_optionstate_enum.OptionStateEnum = dataclasses.field()
    update_date: datetime = dataclasses.field()
    pending_deletion: Optional[bool] = dataclasses.field(default=None)
    update_version: Optional[int] = dataclasses.field(default=None)
    
