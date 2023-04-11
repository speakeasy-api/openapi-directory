import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error response containing error info
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * ~
     */
    developerMessage?: string;
    /**
     * ~
     */
    helpLink?: string;
    /**
     * ~
     */
    httpStatusCode?: number;
    /**
     * ~
     */
    internalCode?: string;
    /**
     * ~
     */
    message?: string;
}
