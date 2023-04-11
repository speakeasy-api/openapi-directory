import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestCustomerAttributesRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Customer ID
     */
    customerId: number;
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
}
export declare class RequestCustomerAttributesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    attributesResponse?: shared.AttributesResponse;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
