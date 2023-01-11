import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DrivesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DrivesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DrivesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DrivesDeleteRequest extends SpeakeasyBase {
    pathParams: DrivesDeletePathParams;
    queryParams: DrivesDeleteQueryParams;
    headers: DrivesDeleteHeaders;
    security: DrivesDeleteSecurity;
}
export declare class DrivesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteDriveResponse?: shared.DeleteDriveResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
