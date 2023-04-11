import { SpeakeasyBase } from "../../../internal/utils";
import { PersonMatch } from "./personmatch";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
/**
 * Success
 */
export declare class GetFaceSearchResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    persons?: PersonMatch[];
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
