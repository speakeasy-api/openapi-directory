import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
/**
 * Request can not be executed in the current system state
 */
export declare class FailedPrecondition extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: string;
    details?: ErrorDetails[];
    /**
     * The error message.
     */
    message?: string;
    /**
     * The error status.
     */
    status?: string;
}
