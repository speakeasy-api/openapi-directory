import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSelectionConfig } from "./deviceselectionconfig";
import { EdgeDeploymentConfig } from "./edgedeploymentconfig";
/**
 * Contains information about a stage in an edge deployment plan.
 */
export declare class DeploymentStage extends SpeakeasyBase {
    deploymentConfig?: EdgeDeploymentConfig;
    deviceSelectionConfig: DeviceSelectionConfig;
    stageName: string;
}
