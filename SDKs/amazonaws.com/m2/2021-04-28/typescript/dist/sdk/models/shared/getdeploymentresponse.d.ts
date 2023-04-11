import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentLifecycleEnum } from "./deploymentlifecycleenum";
/**
 * Success
 */
export declare class GetDeploymentResponse extends SpeakeasyBase {
    applicationId: string;
    applicationVersion: number;
    creationTime: Date;
    deploymentId: string;
    environmentId: string;
    status: DeploymentLifecycleEnum;
    statusReason?: string;
}
