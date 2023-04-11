import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
 */
export declare enum UpdateDeploymentResponseDeploymentStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Deployed = "DEPLOYED"
}
/**
 * Success
 */
export declare class UpdateDeploymentResponse extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: UpdateDeploymentResponseDeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
