import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
/**
 * Request not authenticated due to missing, invalid, or expired token
 */
export declare class Unauthenticated extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: string;
    details?: ErrorDetails;
    /**
     * The error message.
     */
    message?: string;
    /**
     * The error status.
     */
    status?: string;
}
