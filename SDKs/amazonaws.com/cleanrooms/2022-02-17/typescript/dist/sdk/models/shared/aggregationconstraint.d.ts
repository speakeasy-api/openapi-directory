import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationTypeEnum } from "./aggregationtypeenum";
/**
 * Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.
 */
export declare class AggregationConstraint extends SpeakeasyBase {
    columnName: string;
    minimum: number;
    type: AggregationTypeEnum;
}
