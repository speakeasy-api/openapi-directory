import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.FilesFilter;
    limit?: number;
    raw?: boolean;
    sort?: shared.FilesSort;
}
export declare class FilesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FilesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FilesAllRequest extends SpeakeasyBase {
    queryParams: FilesAllQueryParams;
    headers: FilesAllHeaders;
    security: FilesAllSecurity;
}
export declare class FilesAllResponse extends SpeakeasyBase {
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
