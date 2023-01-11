import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileinfo as shared_fileinfo
from ..shared import orderlineitems as shared_orderlineitems
from ..shared import trackinginfo as shared_trackinginfo


@dataclass_json
@dataclasses.dataclass
class DisputeEvidence:
    r"""DisputeEvidence
    This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
    """
    
    evidence_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceId') }})
    evidence_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceType') }})
    files: Optional[list[shared_fileinfo.FileInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    line_items: Optional[list[shared_orderlineitems.OrderLineItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    provided_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedDate') }})
    request_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDate') }})
    respond_by_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    shipment_tracking: Optional[list[shared_trackinginfo.TrackingInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTracking') }})
    
