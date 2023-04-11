import { SpeakeasyBase } from "../../../internal/utils";
import { EstimateByTime } from "./estimatebytime";
/**
 * Describes the estimated cost for resources in your Lightsail for Research account.
 */
export declare class CostEstimate extends SpeakeasyBase {
    resultsByTime?: EstimateByTime[];
    usageType?: string;
}
