import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";
import { ErrorDetails } from "./errordetails";
/**
 * Represents information about the run of an action.
 */
export declare class ActionExecution extends SpeakeasyBase {
    actionExecutionId?: string;
    errorDetails?: ErrorDetails;
    externalExecutionId?: string;
    externalExecutionUrl?: string;
    lastStatusChange?: Date;
    lastUpdatedBy?: string;
    percentComplete?: number;
    status?: ActionExecutionStatusEnum;
    summary?: string;
    token?: string;
}
