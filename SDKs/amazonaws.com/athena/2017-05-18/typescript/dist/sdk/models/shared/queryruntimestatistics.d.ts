import { SpeakeasyBase } from "../../../internal/utils";
import { QueryRuntimeStatisticsRows } from "./queryruntimestatisticsrows";
import { QueryRuntimeStatisticsTimeline } from "./queryruntimestatisticstimeline";
import { QueryStage } from "./querystage";
/**
 * The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan.
 */
export declare class QueryRuntimeStatistics extends SpeakeasyBase {
    outputStage?: QueryStage;
    /**
     * Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.
     */
    rows?: QueryRuntimeStatisticsRows;
    /**
     * Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.
     */
    timeline?: QueryRuntimeStatisticsTimeline;
}
