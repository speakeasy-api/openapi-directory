import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionRecord } from "./executionrecord";
/**
 * Success
 */
export declare class DescribeFlowExecutionRecordsResponse extends SpeakeasyBase {
    flowExecutions?: ExecutionRecord[];
    nextToken?: string;
}
