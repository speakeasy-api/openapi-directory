import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancetype_enum as shared_conformancepackcompliancetype_enum


@dataclass_json
@dataclasses.dataclass
class ConformancePackComplianceSummary:
    r"""ConformancePackComplianceSummary
    Summary includes the name and status of the conformance pack.
    """
    
    conformance_pack_compliance_status: shared_conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackComplianceStatus') }})
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    
