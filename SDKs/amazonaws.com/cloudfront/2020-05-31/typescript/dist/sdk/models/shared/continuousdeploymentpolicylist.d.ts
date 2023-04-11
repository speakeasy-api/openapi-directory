import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousDeploymentPolicySummaryList } from "./continuousdeploymentpolicysummarylist";
/**
 * Contains a list of continuous deployment policies.
 */
export declare class ContinuousDeploymentPolicyList extends SpeakeasyBase {
    items?: ContinuousDeploymentPolicySummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
