import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a bandwidth rate limit interval for a gateway. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both.
 */
export declare class BandwidthRateLimitInterval extends SpeakeasyBase {
    averageUploadRateLimitInBitsPerSec?: number;
    daysOfWeek: number[];
    endHourOfDay: number;
    endMinuteOfHour: number;
    startHourOfDay: number;
    startMinuteOfHour: number;
}
