import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { GranularityEnum } from "./granularityenum";
import { GroupDefinition } from "./groupdefinition";
import { SortDefinition } from "./sortdefinition";
/**
 * You can use the following request parameters to query for how much of your instance usage a reservation covered.
 */
export declare class GetReservationCoverageRequest extends SpeakeasyBase {
    filter?: Expression;
    granularity?: GranularityEnum;
    groupBy?: GroupDefinition[];
    maxResults?: number;
    metrics?: string[];
    nextPageToken?: string;
    sortBy?: SortDefinition;
    timePeriod: DateInterval;
}
