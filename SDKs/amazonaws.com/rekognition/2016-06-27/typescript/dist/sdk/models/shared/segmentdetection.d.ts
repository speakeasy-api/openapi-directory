import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentTypeEnum } from "./segmenttypeenum";
import { ShotSegment } from "./shotsegment";
import { TechnicalCueSegment } from "./technicalcuesegment";
/**
 * A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.
 */
export declare class SegmentDetection extends SpeakeasyBase {
    durationFrames?: number;
    durationMillis?: number;
    durationSMPTE?: string;
    endFrameNumber?: number;
    endTimecodeSMPTE?: string;
    endTimestampMillis?: number;
    shotSegment?: ShotSegment;
    startFrameNumber?: number;
    startTimecodeSMPTE?: string;
    startTimestampMillis?: number;
    technicalCueSegment?: TechnicalCueSegment;
    type?: SegmentTypeEnum;
}
