import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UploadSessionsOneServerList: readonly ["https://upload.apideck.com"];
export declare class UploadSessionsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UploadSessionsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UploadSessionsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UploadSessionsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSessionsOneRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UploadSessionsOnePathParams;
    queryParams: UploadSessionsOneQueryParams;
    headers: UploadSessionsOneHeaders;
    security: UploadSessionsOneSecurity;
}
export declare class UploadSessionsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getUploadSessionResponse?: shared.GetUploadSessionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
