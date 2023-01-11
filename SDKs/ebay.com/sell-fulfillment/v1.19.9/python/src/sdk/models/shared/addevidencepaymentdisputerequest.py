import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileevidence as shared_fileevidence
from ..shared import orderlineitems as shared_orderlineitems


@dataclass_json
@dataclasses.dataclass
class AddEvidencePaymentDisputeRequest:
    r"""AddEvidencePaymentDisputeRequest
    This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
    """
    
    evidence_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[list[shared_fileevidence.FileEvidence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[list[shared_orderlineitems.OrderLineItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    
