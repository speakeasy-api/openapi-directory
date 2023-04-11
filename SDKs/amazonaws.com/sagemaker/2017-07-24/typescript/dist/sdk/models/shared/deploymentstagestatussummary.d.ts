import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSelectionConfig } from "./deviceselectionconfig";
import { EdgeDeploymentConfig } from "./edgedeploymentconfig";
import { EdgeDeploymentStatus } from "./edgedeploymentstatus";
/**
 * Contains information summarizing the deployment stage results.
 */
export declare class DeploymentStageStatusSummary extends SpeakeasyBase {
    deploymentConfig: EdgeDeploymentConfig;
    deploymentStatus: EdgeDeploymentStatus;
    deviceSelectionConfig: DeviceSelectionConfig;
    stageName: string;
}
