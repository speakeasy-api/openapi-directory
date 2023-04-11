import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderInvoiceDesignSettingsPreviewRequest extends SpeakeasyBase {
    /**
     * Allows the client to indicate wether it accepts a compressed encoding to reduce traffic size
     */
    acceptEncoding: string;
    orderInvoiceDesignSettings: shared.OrderInvoiceDesignSettings;
}
export declare class GetOrderInvoiceDesignSettingsPreviewResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The ownerId is not found or not authorized
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Design Preview successfully retrieved
     */
    getOrderInvoiceDesignPreviewResponse?: shared.GetOrderInvoiceDesignPreviewResponse;
}
