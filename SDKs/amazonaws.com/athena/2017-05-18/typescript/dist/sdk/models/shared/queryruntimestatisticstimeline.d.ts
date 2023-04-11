import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.
 */
export declare class QueryRuntimeStatisticsTimeline extends SpeakeasyBase {
    engineExecutionTimeInMillis?: number;
    queryPlanningTimeInMillis?: number;
    queryQueueTimeInMillis?: number;
    serviceProcessingTimeInMillis?: number;
    totalExecutionTimeInMillis?: number;
}
