import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnError } from "./columnerror";
import { ColumnStatistics } from "./columnstatistics";
/**
 * Success
 */
export declare class GetColumnStatisticsForTableResponse extends SpeakeasyBase {
    columnStatisticsList?: ColumnStatistics[];
    errors?: ColumnError[];
}
