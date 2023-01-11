import dataclasses
from typing import Optional
from enum import Enum
from ..shared import policyevaluationdecisiontype_enum as shared_policyevaluationdecisiontype_enum
from ..shared import statement as shared_statement
from ..shared import organizationsdecisiondetail as shared_organizationsdecisiondetail
from ..shared import permissionsboundarydecisiondetail as shared_permissionsboundarydecisiondetail
from ..shared import resourcespecificresult as shared_resourcespecificresult


@dataclasses.dataclass
class EvaluationResult:
    r"""EvaluationResult
    <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
    """
    
    eval_action_name: str = dataclasses.field()
    eval_decision: shared_policyevaluationdecisiontype_enum.PolicyEvaluationDecisionTypeEnum = dataclasses.field()
    eval_decision_details: Optional[dict[str, str]] = dataclasses.field(default=None)
    eval_resource_name: Optional[str] = dataclasses.field(default=None)
    matched_statements: Optional[list[shared_statement.Statement]] = dataclasses.field(default=None)
    missing_context_values: Optional[list[str]] = dataclasses.field(default=None)
    organizations_decision_detail: Optional[shared_organizationsdecisiondetail.OrganizationsDecisionDetail] = dataclasses.field(default=None)
    permissions_boundary_decision_detail: Optional[shared_permissionsboundarydecisiondetail.PermissionsBoundaryDecisionDetail] = dataclasses.field(default=None)
    resource_specific_results: Optional[list[shared_resourcespecificresult.ResourceSpecificResult]] = dataclasses.field(default=None)
    
