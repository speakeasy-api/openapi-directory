import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentResponse } from "./segmentresponse";
/**
 * Success
 */
export declare class GetSegmentVersionResponse extends SpeakeasyBase {
    /**
     * Provides information about the configuration, dimension, and other settings for a segment.
     */
    segmentResponse: SegmentResponse;
}
