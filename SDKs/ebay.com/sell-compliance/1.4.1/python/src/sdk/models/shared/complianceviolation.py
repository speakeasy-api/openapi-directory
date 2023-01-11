import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancedetail as shared_compliancedetail


@dataclass_json
@dataclasses.dataclass
class ComplianceViolation:
    r"""ComplianceViolation
    This type is used by each listing violation that is returned under the listingViolations container.
    """
    
    compliance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    listing_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    offer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    violations: Optional[list[shared_compliancedetail.ComplianceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
