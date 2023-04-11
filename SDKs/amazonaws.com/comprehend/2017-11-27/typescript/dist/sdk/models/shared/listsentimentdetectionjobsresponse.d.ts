import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";
/**
 * Success
 */
export declare class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
}
