import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { GranularityEnum } from "./granularityenum";
import { GroupDefinition } from "./groupdefinition";
import { SortDefinition } from "./sortdefinition";
export declare class GetSavingsPlansCoverageRequest extends SpeakeasyBase {
    filter?: Expression;
    granularity?: GranularityEnum;
    groupBy?: GroupDefinition[];
    maxResults?: number;
    metrics?: string[];
    nextToken?: string;
    sortBy?: SortDefinition;
    timePeriod: DateInterval;
}
