import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveOrderInvoiceGeneralSettingsRequest extends SpeakeasyBase {
    request: shared.OrderInvoiceGeneralSettings;
}
export declare class SaveOrderInvoiceGeneralSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
