import { SpeakeasyBase } from "../../../internal/utils";
import { HealthCheck } from "./healthcheck";
/**
 * Contains the parameters for ConfigureHealthCheck.
 */
export declare class ConfigureHealthCheckInput extends SpeakeasyBase {
    healthCheck: HealthCheck;
    loadBalancerName: string;
}
