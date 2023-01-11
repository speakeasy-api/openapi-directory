import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UploadSessionsAddServerList: readonly ["https://upload.apideck.com"];
export declare class UploadSessionsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UploadSessionsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UploadSessionsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSessionsAddRequest extends SpeakeasyBase {
    serverURL?: string;
    queryParams: UploadSessionsAddQueryParams;
    headers: UploadSessionsAddHeaders;
    request: shared.CreateUploadSessionRequest;
    security: UploadSessionsAddSecurity;
}
export declare class UploadSessionsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createUploadSessionResponse?: shared.CreateUploadSessionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
