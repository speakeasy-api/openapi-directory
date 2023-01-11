import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response object returned from a batch request.
**/
export declare class BatchResponse extends SpeakeasyBase {
    body?: Record<string, any>;
    headers?: Record<string, any>;
    statusCode?: number;
}
