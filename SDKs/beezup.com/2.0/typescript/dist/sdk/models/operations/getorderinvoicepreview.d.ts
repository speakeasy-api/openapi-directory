import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderInvoicePreviewRequest extends SpeakeasyBase {
    /**
     * Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
     */
    acceptEncoding: string;
    /**
     * The Account Identifier
     */
    accountId: string;
    /**
     * The BeezUP Order UUID
     */
    beezUPOrderUUID: string;
    /**
     * The Marketplace Technical Code
     */
    marketplaceTechnicalCode: string;
    previewOrderInvoiceRequest: shared.PreviewOrderInvoiceRequest;
}
export declare class GetOrderInvoicePreviewResponse extends SpeakeasyBase {
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
     * Order Invoice preview successfully returned.
     */
    previewOrderInvoiceResponse?: shared.PreviewOrderInvoiceResponse;
}
