import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceDeploymentStatusEnum } from "./devicedeploymentstatusenum";
/**
 * Contains information summarizing device details and deployment status.
 */
export declare class DeviceDeploymentSummary extends SpeakeasyBase {
    deployedStageName?: string;
    deploymentStartTime?: Date;
    description?: string;
    deviceArn: string;
    deviceDeploymentStatus?: DeviceDeploymentStatusEnum;
    deviceDeploymentStatusMessage?: string;
    deviceFleetName?: string;
    deviceName: string;
    edgeDeploymentPlanArn: string;
    edgeDeploymentPlanName: string;
    stageName: string;
}
