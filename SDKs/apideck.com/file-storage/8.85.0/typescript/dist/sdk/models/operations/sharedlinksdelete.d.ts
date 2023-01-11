import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SharedLinksDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SharedLinksDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SharedLinksDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SharedLinksDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SharedLinksDeleteRequest extends SpeakeasyBase {
    pathParams: SharedLinksDeletePathParams;
    queryParams: SharedLinksDeleteQueryParams;
    headers: SharedLinksDeleteHeaders;
    security: SharedLinksDeleteSecurity;
}
export declare class SharedLinksDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteSharedLinkResponse?: shared.DeleteSharedLinkResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
