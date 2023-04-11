import { SpeakeasyBase } from "../../../internal/utils";
import { StageStatusEnum } from "./stagestatusenum";
/**
 * Contains information summarizing the deployment stage results.
 */
export declare class EdgeDeploymentStatus extends SpeakeasyBase {
    edgeDeploymentFailedInStage: number;
    edgeDeploymentPendingInStage: number;
    edgeDeploymentStageStartTime?: Date;
    edgeDeploymentStatusMessage?: string;
    edgeDeploymentSuccessInStage: number;
    stageStatus: StageStatusEnum;
}
