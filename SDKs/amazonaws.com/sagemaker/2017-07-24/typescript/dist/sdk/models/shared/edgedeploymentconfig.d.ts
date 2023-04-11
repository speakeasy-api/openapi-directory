import { SpeakeasyBase } from "../../../internal/utils";
import { FailureHandlingPolicyEnum } from "./failurehandlingpolicyenum";
/**
 * Contains information about the configuration of a deployment.
 */
export declare class EdgeDeploymentConfig extends SpeakeasyBase {
    failureHandlingPolicy: FailureHandlingPolicyEnum;
}
