import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderInvoicePdfResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    /**
     * The PDF version of the HTML invoice URL in the request
     */
    getOrderInvoicePdf200ApplicationPdfBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The ownerId is not found or not authorized
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
