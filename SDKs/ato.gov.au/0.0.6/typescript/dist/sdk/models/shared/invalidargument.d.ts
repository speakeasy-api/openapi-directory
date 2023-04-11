import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
/**
 * The client specified an invalid argument
 */
export declare class InvalidArgument extends SpeakeasyBase {
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
