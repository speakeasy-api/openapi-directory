import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancetype_enum as shared_conformancepackcompliancetype_enum


@dataclass_json
@dataclasses.dataclass
class AggregateConformancePackComplianceFilters:
    r"""AggregateConformancePackComplianceFilters
    Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegion') }})
    compliance_type: Optional[shared_conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    conformance_pack_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    
