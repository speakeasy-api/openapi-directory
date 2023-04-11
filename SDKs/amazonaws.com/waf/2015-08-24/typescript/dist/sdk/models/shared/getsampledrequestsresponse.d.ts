import { SpeakeasyBase } from "../../../internal/utils";
import { SampledHTTPRequest } from "./sampledhttprequest";
import { TimeWindow } from "./timewindow";
/**
 * Success
 */
export declare class GetSampledRequestsResponse extends SpeakeasyBase {
    populationSize?: number;
    sampledRequests?: SampledHTTPRequest[];
    timeWindow?: TimeWindow;
}
