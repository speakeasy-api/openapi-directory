import { SpeakeasyBase } from "../../../internal/utils";
export declare class DefaultPayloadError extends SpeakeasyBase {
    errorCode?: string;
    errorDetail?: Record<string, any>;
    message?: string;
}
/**
 * default payload for object for all HTTP codes that are not covered individually
**/
export declare class DefaultPayload extends SpeakeasyBase {
    error?: DefaultPayloadError;
}
