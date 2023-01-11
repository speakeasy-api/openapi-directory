import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderInvoiceDesignSettingsPreviewHeaders extends SpeakeasyBase {
    acceptEncoding: string;
}
export declare class GetOrderInvoiceDesignSettingsPreviewRequest extends SpeakeasyBase {
    headers: GetOrderInvoiceDesignSettingsPreviewHeaders;
    request: shared.OrderInvoiceDesignSettings;
}
export declare class GetOrderInvoiceDesignSettingsPreviewResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    getOrderInvoiceDesignPreviewResponse?: shared.GetOrderInvoiceDesignPreviewResponse;
}
