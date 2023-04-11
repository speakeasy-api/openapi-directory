import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateFunctionNameEnum } from "./aggregatefunctionnameenum";
/**
 * Column in configured table that can be used in aggregate function in query.
 */
export declare class AggregateColumn extends SpeakeasyBase {
    columnNames: string[];
    function: AggregateFunctionNameEnum;
}
