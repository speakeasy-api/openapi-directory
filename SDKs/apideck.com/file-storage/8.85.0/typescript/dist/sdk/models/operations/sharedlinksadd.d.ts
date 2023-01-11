import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SharedLinksAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SharedLinksAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SharedLinksAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SharedLinksAddRequest extends SpeakeasyBase {
    queryParams: SharedLinksAddQueryParams;
    headers: SharedLinksAddHeaders;
    request: shared.SharedLinkInput;
    security: SharedLinksAddSecurity;
}
export declare class SharedLinksAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createSharedLinkResponse?: shared.CreateSharedLinkResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
