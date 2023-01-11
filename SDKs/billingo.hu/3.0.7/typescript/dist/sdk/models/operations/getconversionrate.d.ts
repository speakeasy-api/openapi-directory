import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversionRateQueryParams extends SpeakeasyBase {
    from: shared.CurrencyEnum;
    to: shared.CurrencyEnum;
}
export declare class GetConversionRateRequest extends SpeakeasyBase {
    queryParams: GetConversionRateQueryParams;
}
export declare class GetConversionRateResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    conversationRate?: shared.ConversationRate;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
