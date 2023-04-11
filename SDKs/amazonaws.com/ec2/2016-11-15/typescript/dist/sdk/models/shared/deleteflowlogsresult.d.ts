import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class DeleteFlowLogsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class DeleteFlowLogsResultUnsuccessful extends SpeakeasyBase {
    error?: DeleteFlowLogsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class DeleteFlowLogsResult extends SpeakeasyBase {
    unsuccessful?: DeleteFlowLogsResultUnsuccessful[];
}
