import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad Request - a problem reading or understanding the request.
 */
export declare class ServiceError extends SpeakeasyBase {
    /**
     * Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.
     */
    additionalData?: Record<string, string>;
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
