import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveCustomerAttributeRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Customer ID
     */
    customerId: number;
    /**
     * Key
     */
    key: string;
}
export declare class RemoveCustomerAttributeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
