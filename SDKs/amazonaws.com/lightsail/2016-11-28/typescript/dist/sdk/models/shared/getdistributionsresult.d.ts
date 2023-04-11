import { SpeakeasyBase } from "../../../internal/utils";
import { LightsailDistribution } from "./lightsaildistribution";
/**
 * Success
 */
export declare class GetDistributionsResult extends SpeakeasyBase {
    distributions?: LightsailDistribution[];
    nextPageToken?: string;
}
