import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrasesDetectionJobProperties } from "./keyphrasesdetectionjobproperties";
/**
 * Success
 */
export declare class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
    keyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];
    nextToken?: string;
}
