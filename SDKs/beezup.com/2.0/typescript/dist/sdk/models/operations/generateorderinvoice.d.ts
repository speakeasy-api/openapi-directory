import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateOrderInvoiceRequest extends SpeakeasyBase {
    /**
     * The Account Identifier
     */
    accountId: string;
    /**
     * The BeezUP Order UUID
     */
    beezUPOrderUUID: string;
    generateOrderInvoiceRequest: shared.GenerateOrderInvoiceRequest;
    /**
     * The Marketplace Technical Code
     */
    marketplaceTechnicalCode: string;
    /**
     * Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
     */
    userName: string;
}
export declare class GenerateOrderInvoiceResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OwnerId not authorized
     *
     * @remarks
     * The required order invoice settings have not been set
     * BeezUPOrderStatus forbidden
     *
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
