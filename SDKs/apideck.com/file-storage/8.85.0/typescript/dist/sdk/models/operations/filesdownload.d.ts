import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesDownloadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FilesDownloadHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FilesDownloadSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FilesDownloadRequest extends SpeakeasyBase {
    pathParams: FilesDownloadPathParams;
    headers: FilesDownloadHeaders;
    security: FilesDownloadSecurity;
}
export declare class FilesDownloadResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    filesDownload200WildcardBinaryString?: Uint8Array;
}
