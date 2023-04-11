import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { Expression } from "./expression";
import { SavingsPlansDataTypeEnum } from "./savingsplansdatatypeenum";
import { SortDefinition } from "./sortdefinition";
export declare class GetSavingsPlansUtilizationDetailsRequest extends SpeakeasyBase {
    dataType?: SavingsPlansDataTypeEnum[];
    filter?: Expression;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortDefinition;
    timePeriod: DateInterval;
}
