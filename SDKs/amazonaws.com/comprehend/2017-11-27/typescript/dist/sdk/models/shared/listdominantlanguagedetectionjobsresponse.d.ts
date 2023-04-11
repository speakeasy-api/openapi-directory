import { SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguageDetectionJobProperties } from "./dominantlanguagedetectionjobproperties";
/**
 * Success
 */
export declare class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
    dominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];
    nextToken?: string;
}
