import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import threatintelindicatorcategory_enum as shared_threatintelindicatorcategory_enum
from ..shared import threatintelindicatortype_enum as shared_threatintelindicatortype_enum


@dataclass_json
@dataclasses.dataclass
class ThreatIntelIndicator:
    r"""ThreatIntelIndicator
    Details about the threat intelligence related to a finding.
    """
    
    category: Optional[shared_threatintelindicatorcategory_enum.ThreatIntelIndicatorCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    last_observed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    source_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    type: Optional[shared_threatintelindicatortype_enum.ThreatIntelIndicatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
