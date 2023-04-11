import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
import { SegmentTypeEnum } from "./segmenttypeenum";
import { StartSegmentDetectionFilters } from "./startsegmentdetectionfilters";
import { Video } from "./video";
export declare class StartSegmentDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    filters?: StartSegmentDetectionFilters;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    segmentTypes: SegmentTypeEnum[];
    /**
     * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
     */
    video: Video;
}
