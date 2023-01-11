import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileevidence as shared_fileevidence
from ..shared import orderlineitems as shared_orderlineitems


@dataclass_json
@dataclasses.dataclass
class UpdateEvidencePaymentDisputeRequest:
    r"""UpdateEvidencePaymentDisputeRequest
    This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
    """
    
    evidence_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    evidence_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[list[shared_fileevidence.FileEvidence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[list[shared_orderlineitems.OrderLineItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    
