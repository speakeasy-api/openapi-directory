import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorInfo } from "./errorinfo";
/**
 * Represents an error.
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * Context information for an error used for diagnostics.
     */
    errinfo?: ErrorInfo;
    /**
     * The error message.
     */
    message?: string;
    /**
     * Unique ID for this call.
     */
    txnid?: string;
}
