import { SpeakeasyBase } from "../../../internal/utils";
/**
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 *
 * @remarks
 * body.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Full details about the error.  This might contain a server stack trace, for example.
     */
    detail?: string;
    /**
     * The server-side error code.
     */
    errorCode?: number;
    /**
     * The short error message.
     */
    message?: string;
    /**
     * The error name - typically the classname of the exception thrown by the server.
     */
    name?: string;
}
