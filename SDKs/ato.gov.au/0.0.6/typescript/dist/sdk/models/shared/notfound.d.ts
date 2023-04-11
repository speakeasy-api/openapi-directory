import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
/**
 * The specified resource was not found
 */
export declare class NotFound extends SpeakeasyBase {
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
