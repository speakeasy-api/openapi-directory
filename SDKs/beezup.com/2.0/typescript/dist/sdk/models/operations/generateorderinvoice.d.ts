import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateOrderInvoicePathParams extends SpeakeasyBase {
    accountId: string;
    beezUPOrderUUID: string;
    marketplaceTechnicalCode: string;
}
export declare class GenerateOrderInvoiceQueryParams extends SpeakeasyBase {
    userName: string;
}
export declare class GenerateOrderInvoiceRequest extends SpeakeasyBase {
    pathParams: GenerateOrderInvoicePathParams;
    queryParams: GenerateOrderInvoiceQueryParams;
    request: shared.GenerateOrderInvoiceRequest;
}
export declare class GenerateOrderInvoiceResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
