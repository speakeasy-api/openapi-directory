import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FilesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FilesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FilesOneRequest extends SpeakeasyBase {
    pathParams: FilesOnePathParams;
    queryParams: FilesOneQueryParams;
    headers: FilesOneHeaders;
    security: FilesOneSecurity;
}
export declare class FilesOneResponse extends SpeakeasyBase {
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
