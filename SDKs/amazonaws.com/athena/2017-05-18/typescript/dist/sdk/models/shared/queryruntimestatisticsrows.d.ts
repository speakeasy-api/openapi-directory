import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.
 */
export declare class QueryRuntimeStatisticsRows extends SpeakeasyBase {
    inputBytes?: number;
    inputRows?: number;
    outputBytes?: number;
    outputRows?: number;
}
