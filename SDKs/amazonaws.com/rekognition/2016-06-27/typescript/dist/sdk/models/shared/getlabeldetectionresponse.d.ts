import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDetection } from "./labeldetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
/**
 * Success
 */
export declare class GetLabelDetectionResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    labelModelVersion?: string;
    labels?: LabelDetection[];
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
