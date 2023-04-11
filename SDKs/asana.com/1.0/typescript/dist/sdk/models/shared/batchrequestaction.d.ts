import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method you wish to emulate for the action.
 */
export declare enum BatchRequestActionMethodEnum {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete = "delete",
    Patch = "patch",
    Head = "head"
}
/**
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
 */
export declare class BatchRequestActionOptions extends SpeakeasyBase {
    /**
     * The fields to retrieve in the request.
     */
    fields?: string[];
    /**
     * Pagination limit for the request.
     */
    limit?: number;
    /**
     * Pagination offset for the request.
     */
    offset?: number;
}
/**
 * An action object for use in a batch request.
 */
export declare class BatchRequestAction extends SpeakeasyBase {
    /**
     * For `GET` requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in `options` instead. For `POST`, `PATCH`, and `PUT` methods, this should be the content you would have normally put in the data field of the body.
     */
    data?: Record<string, any>;
    /**
     * The HTTP method you wish to emulate for the action.
     */
    method: BatchRequestActionMethodEnum;
    /**
     * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
     */
    options?: BatchRequestActionOptions;
    /**
     * The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in `data` instead.
     */
    relativePath: string;
}
