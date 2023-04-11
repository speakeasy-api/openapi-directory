import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Round-trip time (RTT) is how long it takes for a request from the user to return a response to the user. Amazon CloudWatch Internet Monitor calculates RTT at different percentiles: p50, p90, and p95.
 */
export declare class RoundTripTime extends SpeakeasyBase {
    p50?: number;
    p90?: number;
    p95?: number;
}
