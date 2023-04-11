import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionDetail } from "./actionexecutiondetail";
/**
 * Success
 */
export declare class ListActionExecutionsOutput extends SpeakeasyBase {
    actionExecutionDetails?: ActionExecutionDetail[];
    nextToken?: string;
}
