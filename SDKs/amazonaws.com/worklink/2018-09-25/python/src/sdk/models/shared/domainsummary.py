import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainstatus_enum as shared_domainstatus_enum


@dataclass_json
@dataclasses.dataclass
class DomainSummary:
    r"""DomainSummary
    The summary of the domain.
    """
    
    created_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_status: shared_domainstatus_enum.DomainStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainStatus') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    
