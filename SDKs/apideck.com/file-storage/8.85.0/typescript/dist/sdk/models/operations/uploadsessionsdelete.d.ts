import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadSessionsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UploadSessionsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UploadSessionsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UploadSessionsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UploadSessionsDeleteRequest extends SpeakeasyBase {
    pathParams: UploadSessionsDeletePathParams;
    queryParams: UploadSessionsDeleteQueryParams;
    headers: UploadSessionsDeleteHeaders;
    security: UploadSessionsDeleteSecurity;
}
export declare class UploadSessionsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteUploadSessionResponse?: shared.DeleteUploadSessionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
