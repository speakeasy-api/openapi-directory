import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnError } from "./columnerror";
import { ColumnStatistics } from "./columnstatistics";
/**
 * Success
 */
export declare class GetColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    columnStatisticsList?: ColumnStatistics[];
    errors?: ColumnError[];
}
