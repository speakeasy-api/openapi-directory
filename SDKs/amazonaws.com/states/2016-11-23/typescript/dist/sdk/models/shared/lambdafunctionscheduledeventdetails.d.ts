import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryEventExecutionDataDetails } from "./historyeventexecutiondatadetails";
import { TaskCredentials } from "./taskcredentials";
/**
 * Contains details about a Lambda function scheduled during an execution.
 */
export declare class LambdaFunctionScheduledEventDetails extends SpeakeasyBase {
    input?: string;
    inputDetails?: HistoryEventExecutionDataDetails;
    resource: string;
    taskCredentials?: TaskCredentials;
    timeoutInSeconds?: number;
}
