import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cacertificate as shared_cacertificate


@dataclass_json
@dataclasses.dataclass
class ListCaCertificatesResponse:
    r"""ListCaCertificatesResponse
    The output from the ListCACertificates operation.
    """
    
    certificates: Optional[list[shared_cacertificate.CaCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    
