import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentLifecycleEnum } from "./deploymentlifecycleenum";
/**
 * Contains a summary of a deployed application.
 */
export declare class DeployedVersionSummary extends SpeakeasyBase {
    applicationVersion: number;
    status: DeploymentLifecycleEnum;
    statusReason?: string;
}
