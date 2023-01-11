import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveOrderInvoiceDesignSettingsRequest extends SpeakeasyBase {
    request: shared.OrderInvoiceDesignSettings;
}
export declare class SaveOrderInvoiceDesignSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
