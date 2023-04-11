import { SpeakeasyBase } from "../../../internal/utils";
import { ContentModerationDetection } from "./contentmoderationdetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
/**
 * Success
 */
export declare class GetContentModerationResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    moderationLabels?: ContentModerationDetection[];
    moderationModelVersion?: string;
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
