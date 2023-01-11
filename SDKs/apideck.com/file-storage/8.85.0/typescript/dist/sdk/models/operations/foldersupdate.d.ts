import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FoldersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class FoldersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FoldersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FoldersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FoldersUpdateRequest extends SpeakeasyBase {
    pathParams: FoldersUpdatePathParams;
    queryParams: FoldersUpdateQueryParams;
    headers: FoldersUpdateHeaders;
    request: shared.UpdateFolderRequestInput;
    security: FoldersUpdateSecurity;
}
export declare class FoldersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateFolderResponse?: shared.UpdateFolderResponse;
}
