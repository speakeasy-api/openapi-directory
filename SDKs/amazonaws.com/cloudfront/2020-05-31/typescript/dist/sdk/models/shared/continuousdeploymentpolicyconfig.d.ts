import { SpeakeasyBase } from "../../../internal/utils";
import { StagingDistributionDnsNames } from "./stagingdistributiondnsnames";
import { TrafficConfig } from "./trafficconfig";
/**
 * Contains the configuration for a continuous deployment policy.
 */
export declare class ContinuousDeploymentPolicyConfig extends SpeakeasyBase {
    enabled: boolean;
    stagingDistributionDnsNames: StagingDistributionDnsNames;
    trafficConfig?: TrafficConfig;
}
