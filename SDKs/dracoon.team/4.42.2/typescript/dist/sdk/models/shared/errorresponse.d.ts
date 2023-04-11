import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error information
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Debug information
     */
    debugInfo?: string;
    /**
     * Internal error code
     */
    errorCode?: number;
    /**
     * HTTP status code description
     */
    message: string;
}
