import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returned error from failed REST.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Error code.
     */
    code?: number;
    /**
     * Link to help with error.
     */
    href?: string;
    /**
     * Message explaining the error's cause.
     */
    message?: string;
    /**
     * Server ID with which error was encountered.
     */
    serverId?: string;
    /**
     * Status error code.
     */
    statusCode?: number;
}
