import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FoldersCopyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FoldersCopyQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FoldersCopyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FoldersCopySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FoldersCopyRequest extends SpeakeasyBase {
    pathParams: FoldersCopyPathParams;
    queryParams: FoldersCopyQueryParams;
    headers: FoldersCopyHeaders;
    request: shared.CopyFolderRequestInput;
    security: FoldersCopySecurity;
}
export declare class FoldersCopyResponse extends SpeakeasyBase {
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
