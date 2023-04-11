import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { GranularityEnum } from "./granularityenum";
import { SortDefinition } from "./sortdefinition";
export declare class GetSavingsPlansUtilizationRequest extends SpeakeasyBase {
    filter?: Expression;
    granularity?: GranularityEnum;
    sortBy?: SortDefinition;
    timePeriod: DateInterval;
}
