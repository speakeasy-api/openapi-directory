import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesSearchHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FilesSearchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FilesSearchRequest extends SpeakeasyBase {
    headers: FilesSearchHeaders;
    request: shared.FilesSearch;
    security: FilesSearchSecurity;
}
export declare class FilesSearchResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getFilesResponse?: shared.GetFilesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
