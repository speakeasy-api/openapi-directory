import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UploadSessionsFinishServerList: readonly ["https://upload.apideck.com"];
export declare class UploadSessionsFinishPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UploadSessionsFinishQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UploadSessionsFinishHeaders extends SpeakeasyBase {
    digest?: string;
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UploadSessionsFinishSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSessionsFinishRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UploadSessionsFinishPathParams;
    queryParams: UploadSessionsFinishQueryParams;
    headers: UploadSessionsFinishHeaders;
    request?: Record<string, any>;
    security: UploadSessionsFinishSecurity;
}
export declare class UploadSessionsFinishResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getFileResponse?: shared.GetFileResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
