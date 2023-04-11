import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { GranularityEnum } from "./granularityenum";
import { GroupDefinition } from "./groupdefinition";
export declare class GetCostAndUsageRequest extends SpeakeasyBase {
    filter?: Expression;
    granularity: GranularityEnum;
    groupBy?: GroupDefinition[];
    metrics: string[];
    nextPageToken?: string;
    timePeriod: DateInterval;
}
