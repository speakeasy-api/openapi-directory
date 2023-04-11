import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { Statement } from "./statement";
/**
 * <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
 */
export declare class ResourceSpecificResult extends SpeakeasyBase {
    evalDecisionDetails?: Record<string, PolicyEvaluationDecisionTypeEnum>;
    evalResourceDecision: PolicyEvaluationDecisionTypeEnum;
    evalResourceName: string;
    matchedStatements?: Statement[];
    missingContextValues?: string[];
    permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}
