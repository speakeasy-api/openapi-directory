import { SpeakeasyBase } from "../../../internal/utils";
import { TextDetectionResult } from "./textdetectionresult";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
/**
 * Success
 */
export declare class GetTextDetectionResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    textDetections?: TextDetectionResult[];
    textModelVersion?: string;
    /**
     * Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
     */
    videoMetadata?: VideoMetadata;
}
