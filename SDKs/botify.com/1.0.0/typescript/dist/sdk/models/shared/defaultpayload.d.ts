import { SpeakeasyBase } from "../../../internal/utils";
export declare class DefaultPayloadError extends SpeakeasyBase {
    /**
     * Error Code
     */
    errorCode?: string;
    /**
     * If available, detailed error
     */
    errorDetail?: Record<string, any>;
    /**
     * Error Message
     */
    message?: string;
}
/**
 * default payload for object for all HTTP codes that are not covered individually
 */
export declare class DefaultPayload extends SpeakeasyBase {
    error?: DefaultPayloadError;
}
