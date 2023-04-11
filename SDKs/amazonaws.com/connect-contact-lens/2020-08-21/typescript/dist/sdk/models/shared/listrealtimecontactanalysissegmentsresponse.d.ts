import { SpeakeasyBase } from "../../../internal/utils";
import { RealtimeContactAnalysisSegment } from "./realtimecontactanalysissegment";
/**
 * Success
 */
export declare class ListRealtimeContactAnalysisSegmentsResponse extends SpeakeasyBase {
    nextToken?: string;
    segments: RealtimeContactAnalysisSegment[];
}
