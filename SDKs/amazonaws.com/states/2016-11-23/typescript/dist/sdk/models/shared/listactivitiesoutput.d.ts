import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityListItem } from "./activitylistitem";
/**
 * Success
 */
export declare class ListActivitiesOutput extends SpeakeasyBase {
    activities: ActivityListItem[];
    nextToken?: string;
}
