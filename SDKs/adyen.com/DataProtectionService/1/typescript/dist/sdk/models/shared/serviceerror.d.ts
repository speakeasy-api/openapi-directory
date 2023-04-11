import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad Request - a problem reading or understanding the request.
 */
export declare class ServiceError extends SpeakeasyBase {
    /**
     * The error code mapped to the error message.
     */
    errorCode?: string;
    /**
     * The category of the error.
     */
    errorType?: string;
    /**
     * A short explanation of the issue.
     */
    message?: string;
    /**
     * The PSP reference of the payment.
     */
    pspReference?: string;
    /**
     * The HTTP response status.
     */
    status?: number;
}
