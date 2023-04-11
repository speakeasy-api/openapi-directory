import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestUserAttributesRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Filter string
     */
    filter?: string;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Range offset
     */
    offset?: number;
    /**
     * Sort string
     */
    sort?: string;
    /**
     * User ID
     */
    userId: number;
}
export declare class RequestUserAttributesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attributesResponse?: shared.AttributesResponse;
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
