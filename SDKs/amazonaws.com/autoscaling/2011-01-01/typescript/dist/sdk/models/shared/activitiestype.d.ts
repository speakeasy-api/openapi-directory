import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * Success
 */
export declare class ActivitiesType extends SpeakeasyBase {
    activities: Activity[];
    nextToken?: string;
}
