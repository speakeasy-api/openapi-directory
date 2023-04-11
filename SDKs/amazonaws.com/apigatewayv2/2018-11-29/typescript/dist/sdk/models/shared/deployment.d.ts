import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
 */
export declare enum DeploymentDeploymentStatusEnum {
    Pending = "PENDING",
    Failed = "FAILED",
    Deployed = "DEPLOYED"
}
/**
 * An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
 */
export declare class Deployment extends SpeakeasyBase {
    autoDeployed?: boolean;
    createdDate?: Date;
    deploymentId?: string;
    deploymentStatus?: DeploymentDeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
}
