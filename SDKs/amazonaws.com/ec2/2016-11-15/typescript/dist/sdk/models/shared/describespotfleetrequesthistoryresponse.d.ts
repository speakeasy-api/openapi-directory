import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the output of DescribeSpotFleetRequestHistory.
**/
export declare class DescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    historyRecords?: Record<string, any>;
    lastEvaluatedTime?: Record<string, any>;
    nextToken?: Record<string, any>;
    spotFleetRequestId?: Record<string, any>;
    startTime?: Record<string, any>;
}
