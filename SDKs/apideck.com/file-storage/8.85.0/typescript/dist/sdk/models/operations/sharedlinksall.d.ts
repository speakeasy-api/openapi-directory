import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SharedLinksAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class SharedLinksAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SharedLinksAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SharedLinksAllRequest extends SpeakeasyBase {
    queryParams: SharedLinksAllQueryParams;
    headers: SharedLinksAllHeaders;
    security: SharedLinksAllSecurity;
}
export declare class SharedLinksAllResponseOutput extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getSharedLinksResponse?: shared.GetSharedLinksResponseOutput;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
