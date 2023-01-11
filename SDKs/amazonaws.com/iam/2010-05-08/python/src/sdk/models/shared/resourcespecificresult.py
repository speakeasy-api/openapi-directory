import dataclasses
from typing import Optional
from enum import Enum
from ..shared import policyevaluationdecisiontype_enum as shared_policyevaluationdecisiontype_enum
from ..shared import statement as shared_statement
from ..shared import permissionsboundarydecisiondetail as shared_permissionsboundarydecisiondetail


@dataclasses.dataclass
class ResourceSpecificResult:
    r"""ResourceSpecificResult
    <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
    """
    
    eval_resource_decision: shared_policyevaluationdecisiontype_enum.PolicyEvaluationDecisionTypeEnum = dataclasses.field()
    eval_resource_name: str = dataclasses.field()
    eval_decision_details: Optional[dict[str, str]] = dataclasses.field(default=None)
    matched_statements: Optional[list[shared_statement.Statement]] = dataclasses.field(default=None)
    missing_context_values: Optional[list[str]] = dataclasses.field(default=None)
    permissions_boundary_decision_detail: Optional[shared_permissionsboundarydecisiondetail.PermissionsBoundaryDecisionDetail] = dataclasses.field(default=None)
    
