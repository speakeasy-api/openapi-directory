import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
 */
export declare enum CreateDeploymentResponseDeploymentStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Deployed = "DEPLOYED"
}
/**
 * Success
 */
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: CreateDeploymentResponseDeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
