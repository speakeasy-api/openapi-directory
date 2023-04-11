import { SpeakeasyBase } from "../../../internal/utils";
import { DataLocationConstraintEnum } from "./datalocationconstraintenum";
import { EstimatedCostTierEnum } from "./estimatedcosttierenum";
import { FailurePolicy } from "./failurepolicy";
import { ResiliencyPolicyTierEnum } from "./resiliencypolicytierenum";
/**
 * Defines a resiliency policy.
 */
export declare class ResiliencyPolicy extends SpeakeasyBase {
    creationTime?: Date;
    dataLocationConstraint?: DataLocationConstraintEnum;
    estimatedCostTier?: EstimatedCostTierEnum;
    policy?: Record<string, FailurePolicy>;
    policyArn?: string;
    policyDescription?: string;
    policyName?: string;
    tags?: Record<string, string>;
    tier?: ResiliencyPolicyTierEnum;
}
