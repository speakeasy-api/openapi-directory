import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeDeploymentPlanSummary } from "./edgedeploymentplansummary";
/**
 * Success
 */
export declare class ListEdgeDeploymentPlansResponse extends SpeakeasyBase {
    edgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[];
    nextToken?: string;
}
