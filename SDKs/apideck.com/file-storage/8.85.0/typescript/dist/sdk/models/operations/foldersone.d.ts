import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FoldersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FoldersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FoldersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FoldersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FoldersOneRequest extends SpeakeasyBase {
    pathParams: FoldersOnePathParams;
    queryParams: FoldersOneQueryParams;
    headers: FoldersOneHeaders;
    security: FoldersOneSecurity;
}
export declare class FoldersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getFolderResponse?: shared.GetFolderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
