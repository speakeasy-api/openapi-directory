import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainvalidationrecord as shared_domainvalidationrecord
from ..shared import renewalstatus_enum as shared_renewalstatus_enum


@dataclass_json
@dataclasses.dataclass
class RenewalSummary:
    r"""RenewalSummary
    Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
    """
    
    domain_validation_records: Optional[list[shared_domainvalidationrecord.DomainValidationRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainValidationRecords') }})
    renewal_status: Optional[shared_renewalstatus_enum.RenewalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalStatus') }})
    renewal_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalStatusReason') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
