import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancecontributorcount as shared_compliancecontributorcount


@dataclass_json
@dataclasses.dataclass
class ComplianceSummary:
    r"""ComplianceSummary
    The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
    """
    
    compliance_summary_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummaryTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compliant_resource_count: Optional[shared_compliancecontributorcount.ComplianceContributorCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantResourceCount') }})
    non_compliant_resource_count: Optional[shared_compliancecontributorcount.ComplianceContributorCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantResourceCount') }})
    
