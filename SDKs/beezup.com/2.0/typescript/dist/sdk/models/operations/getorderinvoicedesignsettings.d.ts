import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderInvoiceDesignSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    orderInvoiceDesignSettings?: shared.OrderInvoiceDesignSettings;
}
