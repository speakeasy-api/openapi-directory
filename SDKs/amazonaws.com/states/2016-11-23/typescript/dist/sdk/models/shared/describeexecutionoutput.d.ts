import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * Success
 */
export declare class DescribeExecutionOutput extends SpeakeasyBase {
    cause?: string;
    error?: string;
    executionArn: string;
    input?: string;
    /**
     * Provides details about execution input or output.
     */
    inputDetails?: CloudWatchEventsExecutionDataDetails;
    mapRunArn?: string;
    name?: string;
    output?: string;
    /**
     * Provides details about execution input or output.
     */
    outputDetails?: CloudWatchEventsExecutionDataDetails;
    startDate: Date;
    stateMachineArn: string;
    status: ExecutionStatusEnum;
    stopDate?: Date;
    traceHeader?: string;
}
