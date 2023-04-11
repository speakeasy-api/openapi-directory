import { SpeakeasyBase } from "../../../internal/utils";
import { BandwidthRateLimitInterval } from "./bandwidthratelimitinterval";
export declare class PutBandwidthRateLimitScheduleInput extends SpeakeasyBase {
    bandwidthRateLimitIntervals: BandwidthRateLimitInterval[];
    gatewayArn: string;
}
