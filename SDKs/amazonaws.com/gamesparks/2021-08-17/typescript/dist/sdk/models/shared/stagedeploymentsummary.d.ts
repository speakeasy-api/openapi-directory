import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentActionEnum } from "./deploymentactionenum";
import { DeploymentResult } from "./deploymentresult";
import { DeploymentStateEnum } from "./deploymentstateenum";
/**
 * The summary of the properties of a stage deployment.
 */
export declare class StageDeploymentSummary extends SpeakeasyBase {
    deploymentAction?: DeploymentActionEnum;
    deploymentId?: string;
    deploymentResult?: DeploymentResult;
    deploymentState?: DeploymentStateEnum;
    lastUpdated?: Date;
    snapshotId?: string;
}
