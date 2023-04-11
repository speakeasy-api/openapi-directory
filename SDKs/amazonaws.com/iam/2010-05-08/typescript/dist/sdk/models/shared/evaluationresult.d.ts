import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationsDecisionDetail } from "./organizationsdecisiondetail";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { ResourceSpecificResult } from "./resourcespecificresult";
import { Statement } from "./statement";
/**
 * <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
 */
export declare class EvaluationResult extends SpeakeasyBase {
    evalActionName: string;
    evalDecision: PolicyEvaluationDecisionTypeEnum;
    evalDecisionDetails?: Record<string, PolicyEvaluationDecisionTypeEnum>;
    evalResourceName?: string;
    matchedStatements?: Statement[];
    missingContextValues?: string[];
    organizationsDecisionDetail?: OrganizationsDecisionDetail;
    permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
    resourceSpecificResults?: ResourceSpecificResult[];
}
