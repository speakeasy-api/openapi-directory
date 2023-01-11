import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AggregateConformancePackComplianceCount:
    r"""AggregateConformancePackComplianceCount
    The number of conformance packs that are compliant and noncompliant.
    """
    
    compliant_conformance_pack_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantConformancePackCount') }})
    non_compliant_conformance_pack_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantConformancePackCount') }})
    
