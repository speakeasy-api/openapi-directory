import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FilesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FilesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FilesDeleteRequest extends SpeakeasyBase {
    pathParams: FilesDeletePathParams;
    queryParams: FilesDeleteQueryParams;
    headers: FilesDeleteHeaders;
    security: FilesDeleteSecurity;
}
export declare class FilesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteFileResponse?: shared.DeleteFileResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
