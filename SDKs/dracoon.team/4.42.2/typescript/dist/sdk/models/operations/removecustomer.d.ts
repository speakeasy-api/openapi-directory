import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveCustomerRequest extends SpeakeasyBase {
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Customer ID
     */
    customerId: number;
}
export declare class RemoveCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
