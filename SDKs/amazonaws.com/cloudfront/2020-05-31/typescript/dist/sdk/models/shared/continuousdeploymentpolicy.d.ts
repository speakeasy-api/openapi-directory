import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousDeploymentPolicyConfig } from "./continuousdeploymentpolicyconfig";
/**
 * A continuous deployment policy.
 */
export declare class ContinuousDeploymentPolicy extends SpeakeasyBase {
    /**
     * Contains the configuration for a continuous deployment policy.
     */
    continuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
    id: string;
    lastModifiedTime: Date;
}
