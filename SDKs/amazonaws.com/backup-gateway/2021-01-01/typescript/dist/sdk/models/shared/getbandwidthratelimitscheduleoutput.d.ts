import { SpeakeasyBase } from "../../../internal/utils";
import { BandwidthRateLimitInterval } from "./bandwidthratelimitinterval";
/**
 * Success
 */
export declare class GetBandwidthRateLimitScheduleOutput extends SpeakeasyBase {
    bandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
    gatewayArn?: string;
}
