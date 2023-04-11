import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentAlarms } from "./deploymentalarms";
import { DeploymentCircuitBreaker } from "./deploymentcircuitbreaker";
/**
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
 */
export declare class DeploymentConfiguration extends SpeakeasyBase {
    alarms?: DeploymentAlarms;
    deploymentCircuitBreaker?: DeploymentCircuitBreaker;
    maximumPercent?: number;
    minimumHealthyPercent?: number;
}
