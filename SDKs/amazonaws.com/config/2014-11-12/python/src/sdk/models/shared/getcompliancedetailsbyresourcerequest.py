import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancetype_enum as shared_compliancetype_enum


@dataclass_json
@dataclasses.dataclass
class GetComplianceDetailsByResourceRequest:
    r"""GetComplianceDetailsByResourceRequest
    <p/>
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    compliance_types: Optional[list[shared_compliancetype_enum.ComplianceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceTypes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
