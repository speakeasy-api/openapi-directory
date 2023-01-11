import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import severitylabel_enum as shared_severitylabel_enum


@dataclass_json
@dataclasses.dataclass
class FindingProviderSeverity:
    r"""FindingProviderSeverity
    The severity assigned to the finding by the finding provider.
    """
    
    label: Optional[shared_severitylabel_enum.SeverityLabelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    original: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Original') }})
    
