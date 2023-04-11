import { SpeakeasyBase } from "../../../internal/utils";
import { BillingDetails } from "./billingdetails";
import { CloudWatchEventsExecutionDataDetails } from "./cloudwatcheventsexecutiondatadetails";
import { SyncExecutionStatusEnum } from "./syncexecutionstatusenum";
/**
 * Success
 */
export declare class StartSyncExecutionOutput extends SpeakeasyBase {
    billingDetails?: BillingDetails;
    cause?: string;
    error?: string;
    executionArn: string;
    input?: string;
    /**
     * Provides details about execution input or output.
     */
    inputDetails?: CloudWatchEventsExecutionDataDetails;
    name?: string;
    output?: string;
    /**
     * Provides details about execution input or output.
     */
    outputDetails?: CloudWatchEventsExecutionDataDetails;
    startDate: Date;
    stateMachineArn?: string;
    status: SyncExecutionStatusEnum;
    stopDate: Date;
    traceHeader?: string;
}
