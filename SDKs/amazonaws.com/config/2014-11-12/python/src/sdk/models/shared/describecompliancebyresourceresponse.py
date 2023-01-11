import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancebyresource as shared_compliancebyresource


@dataclass_json
@dataclasses.dataclass
class DescribeComplianceByResourceResponse:
    r"""DescribeComplianceByResourceResponse
    <p/>
    """
    
    compliance_by_resources: Optional[list[shared_compliancebyresource.ComplianceByResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceByResources') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
