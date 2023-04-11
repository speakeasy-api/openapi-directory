import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentsResponse } from "./segmentsresponse";
/**
 * Success
 */
export declare class GetSegmentVersionsResponse extends SpeakeasyBase {
    /**
     * Provides information about all the segments that are associated with an application.
     */
    segmentsResponse: SegmentsResponse;
}
