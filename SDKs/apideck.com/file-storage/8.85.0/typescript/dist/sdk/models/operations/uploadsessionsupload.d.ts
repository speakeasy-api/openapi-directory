import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UploadSessionsUploadServerList: readonly ["https://upload.apideck.com"];
export declare class UploadSessionsUploadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UploadSessionsUploadQueryParams extends SpeakeasyBase {
    partNumber: number;
    raw?: boolean;
}
export declare class UploadSessionsUploadHeaders extends SpeakeasyBase {
    digest?: string;
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UploadSessionsUploadSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSessionsUploadRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UploadSessionsUploadPathParams;
    queryParams: UploadSessionsUploadQueryParams;
    headers: UploadSessionsUploadHeaders;
    request: Uint8Array;
    security: UploadSessionsUploadSecurity;
}
export declare class UploadSessionsUploadResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateUploadSessionResponse?: shared.UpdateUploadSessionResponse;
}
