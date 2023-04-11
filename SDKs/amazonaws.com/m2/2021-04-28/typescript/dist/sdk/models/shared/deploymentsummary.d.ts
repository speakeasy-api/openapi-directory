import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentLifecycleEnum } from "./deploymentlifecycleenum";
/**
 * A subset of information about a specific deployment.
 */
export declare class DeploymentSummary extends SpeakeasyBase {
    applicationId: string;
    applicationVersion: number;
    creationTime: Date;
    deploymentId: string;
    environmentId: string;
    status: DeploymentLifecycleEnum;
    statusReason?: string;
}
