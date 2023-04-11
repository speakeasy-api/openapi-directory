import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitUsageTypeEnum } from "./usagelimitusagetypeenum";
export declare class ListUsageLimitsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceArn?: string;
    usageType?: UsageLimitUsageTypeEnum;
}
