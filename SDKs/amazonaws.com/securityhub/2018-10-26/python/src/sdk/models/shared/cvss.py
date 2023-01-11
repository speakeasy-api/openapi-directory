import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adjustment as shared_adjustment


@dataclass_json
@dataclasses.dataclass
class Cvss:
    r"""Cvss
    CVSS scores from the advisory related to the vulnerability.
    """
    
    adjustments: Optional[list[shared_adjustment.Adjustment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Adjustments') }})
    base_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseScore') }})
    base_vector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseVector') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
