import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentActionEnum } from "./deploymentactionenum";
import { DeploymentResult } from "./deploymentresult";
import { DeploymentStateEnum } from "./deploymentstateenum";
/**
 * Properties that provide details of a stage deployment.
 */
export declare class StageDeploymentDetails extends SpeakeasyBase {
    created?: Date;
    deploymentAction?: DeploymentActionEnum;
    deploymentId?: string;
    deploymentResult?: DeploymentResult;
    deploymentState?: DeploymentStateEnum;
    lastUpdated?: Date;
    snapshotId?: string;
}
