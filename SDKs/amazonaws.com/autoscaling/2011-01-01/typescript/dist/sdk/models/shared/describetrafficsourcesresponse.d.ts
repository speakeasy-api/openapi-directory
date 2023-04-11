import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficSourceState } from "./trafficsourcestate";
/**
 * Success
 */
export declare class DescribeTrafficSourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    trafficSources?: TrafficSourceState[];
}
