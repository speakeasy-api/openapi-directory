import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorError extends SpeakeasyBase {
    /**
     * The error message.
     */
    message?: string;
}
/**
 * Unauthorized
 */
export declare class ErrorT extends SpeakeasyBase {
    error?: ErrorError;
}
