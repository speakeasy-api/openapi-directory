import { SpeakeasyBase } from "../../../internal/utils";
import { PersonDetection } from "./persondetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
/**
 * Success
 */
export declare class GetPersonTrackingResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    persons?: PersonDetection[];
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
