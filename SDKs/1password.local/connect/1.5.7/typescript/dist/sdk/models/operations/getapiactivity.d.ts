import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiActivitySecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetApiActivityRequest extends SpeakeasyBase {
    /**
     * How many API Events should be retrieved in a single request.
     */
    limit?: number;
    /**
     * How far into the collection of API Events should the response start
     */
    offset?: number;
}
export declare class GetApiActivityResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiRequests?: shared.APIRequest[];
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
