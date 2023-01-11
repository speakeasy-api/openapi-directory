import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FoldersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FoldersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FoldersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FoldersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FoldersDeleteRequest extends SpeakeasyBase {
    pathParams: FoldersDeletePathParams;
    queryParams: FoldersDeleteQueryParams;
    headers: FoldersDeleteHeaders;
    security: FoldersDeleteSecurity;
}
export declare class FoldersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteFolderResponse?: shared.DeleteFolderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
