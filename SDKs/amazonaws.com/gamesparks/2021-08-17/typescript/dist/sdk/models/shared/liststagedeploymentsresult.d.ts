import { SpeakeasyBase } from "../../../internal/utils";
import { StageDeploymentSummary } from "./stagedeploymentsummary";
/**
 * Success
 */
export declare class ListStageDeploymentsResult extends SpeakeasyBase {
    nextToken?: string;
    stageDeployments?: StageDeploymentSummary[];
}
