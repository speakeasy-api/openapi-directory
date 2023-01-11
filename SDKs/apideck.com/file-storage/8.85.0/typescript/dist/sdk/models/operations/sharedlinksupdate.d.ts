import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SharedLinksUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SharedLinksUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SharedLinksUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SharedLinksUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SharedLinksUpdateRequest extends SpeakeasyBase {
    pathParams: SharedLinksUpdatePathParams;
    queryParams: SharedLinksUpdateQueryParams;
    headers: SharedLinksUpdateHeaders;
    request: shared.SharedLinkInput;
    security: SharedLinksUpdateSecurity;
}
export declare class SharedLinksUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateSharedLinkResponse?: shared.UpdateSharedLinkResponse;
}
