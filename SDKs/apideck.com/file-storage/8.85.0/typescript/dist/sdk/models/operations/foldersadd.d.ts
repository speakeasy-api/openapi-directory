import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FoldersAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class FoldersAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class FoldersAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FoldersAddRequest extends SpeakeasyBase {
    queryParams: FoldersAddQueryParams;
    headers: FoldersAddHeaders;
    request: shared.CreateFolderRequestInput;
    security: FoldersAddSecurity;
}
export declare class FoldersAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createFolderResponse?: shared.CreateFolderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
