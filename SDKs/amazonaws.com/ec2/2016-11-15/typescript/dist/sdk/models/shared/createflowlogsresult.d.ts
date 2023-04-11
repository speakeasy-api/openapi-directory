import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class CreateFlowLogsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class CreateFlowLogsResultUnsuccessful extends SpeakeasyBase {
    error?: CreateFlowLogsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class CreateFlowLogsResult extends SpeakeasyBase {
    clientToken?: string;
    flowLogIds?: string[];
    unsuccessful?: CreateFlowLogsResultUnsuccessful[];
}
