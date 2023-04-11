import { SpeakeasyBase } from "../../../internal/utils";
import { LightsailDistribution } from "./lightsaildistribution";
import { Operation } from "./operation";
/**
 * Success
 */
export declare class CreateDistributionResult extends SpeakeasyBase {
    distribution?: LightsailDistribution;
    operation?: Operation;
}
