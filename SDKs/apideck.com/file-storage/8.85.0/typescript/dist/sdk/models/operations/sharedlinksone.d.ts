import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SharedLinksOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SharedLinksOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SharedLinksOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SharedLinksOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SharedLinksOneRequest extends SpeakeasyBase {
    pathParams: SharedLinksOnePathParams;
    queryParams: SharedLinksOneQueryParams;
    headers: SharedLinksOneHeaders;
    security: SharedLinksOneSecurity;
}
export declare class SharedLinksOneResponseOutput extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getSharedLinkResponse?: shared.GetSharedLinkResponseOutput;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
