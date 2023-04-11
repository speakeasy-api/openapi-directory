import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
 */
export declare enum GetDeploymentResponseDeploymentStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Deployed = "DEPLOYED"
}
/**
 * Success
 */
export declare class GetDeploymentResponse extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: GetDeploymentResponseDeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
