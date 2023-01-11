import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outgoingcertificate as shared_outgoingcertificate


@dataclass_json
@dataclasses.dataclass
class ListOutgoingCertificatesResponse:
    r"""ListOutgoingCertificatesResponse
    The output from the ListOutgoingCertificates operation.
    """
    
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    outgoing_certificates: Optional[list[shared_outgoingcertificate.OutgoingCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoingCertificates') }})
    
