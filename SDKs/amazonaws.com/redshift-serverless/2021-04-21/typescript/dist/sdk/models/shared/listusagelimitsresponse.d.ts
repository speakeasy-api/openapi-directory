import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimit } from "./usagelimit";
/**
 * Success
 */
export declare class ListUsageLimitsResponse extends SpeakeasyBase {
    nextToken?: string;
    usageLimits?: UsageLimit[];
}
