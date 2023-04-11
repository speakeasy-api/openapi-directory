import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response object returned from a batch request.
 */
export declare class BatchResponse extends SpeakeasyBase {
    /**
     * The JSON body that the invoked endpoint returned.
     */
    body?: Record<string, any>;
    /**
     * A map of HTTP headers specific to this result. This is primarily used for returning a `Location` header to accompany a `201 Created` result.  The parent HTTP response will contain all common headers.
     */
    headers?: Record<string, any>;
    /**
     * The HTTP status code that the invoked endpoint returned.
     */
    statusCode?: number;
}
