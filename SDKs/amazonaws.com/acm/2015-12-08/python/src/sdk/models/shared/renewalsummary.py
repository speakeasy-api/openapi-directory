import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainvalidation as shared_domainvalidation
from ..shared import renewalstatus_enum as shared_renewalstatus_enum
from ..shared import failurereason_enum as shared_failurereason_enum


@dataclass_json
@dataclasses.dataclass
class RenewalSummary:
    r"""RenewalSummary
    Contains information about the status of ACM's <a href=\"https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html\">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
    """
    
    domain_validation_options: list[shared_domainvalidation.DomainValidation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    renewal_status: shared_renewalstatus_enum.RenewalStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatus') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    renewal_status_reason: Optional[shared_failurereason_enum.FailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatusReason') }})
    
