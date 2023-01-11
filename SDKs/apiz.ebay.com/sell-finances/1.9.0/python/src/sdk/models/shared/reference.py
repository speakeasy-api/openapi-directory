import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Reference:
    r"""Reference
    This field is returned for NON_SALE_CHARGE transactions that contain non-transactional seller fees.
    """
    
    reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceId') }})
    reference_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    
