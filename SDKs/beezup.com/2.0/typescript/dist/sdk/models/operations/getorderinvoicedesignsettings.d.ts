import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderInvoiceDesignSettingsResponse extends SpeakeasyBase {
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
     * Design successfully retrieved
     */
    orderInvoiceDesignSettings?: shared.OrderInvoiceDesignSettings;
}
