import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateBatchOrderInvoiceRequest extends SpeakeasyBase {
    requestBody: shared.GenerateBatchOrderInvoiceRequestItem[];
    /**
     * Sometimes the user in the e-commerce application is not the same as user associated with the current subscription key. We recommend providing your application's user login.
     */
    userName: string;
}
export declare class GenerateBatchOrderInvoiceResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
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
    /**
     * GenerateBatchOrderInvoiceErrorResponse
     */
    generateBatchOrderInvoiceErrorResponseItems?: shared.GenerateBatchOrderInvoiceErrorResponseItem[];
    /**
     * The locations of the generated invoice. Might take a few seconds to be available
     */
    generateBatchOrderInvoiceResponse?: shared.GenerateOrderInvoiceResponse[];
}
