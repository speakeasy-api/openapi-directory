import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specified resource was not found
 */
export declare class NotFoundResponse extends SpeakeasyBase {
    /**
     * Contains parameter or domain specific information related to the error and why it occurred.
     */
    detail?: any;
    /**
     * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
     */
    error?: string;
    /**
     * A human-readable message providing more details about the error.
     */
    message?: string;
    /**
     * Link to documentation of error type
     */
    ref?: string;
    /**
     * HTTP status code
     */
    statusCode?: number;
    /**
     * The type of error returned
     */
    typeName?: string;
}
