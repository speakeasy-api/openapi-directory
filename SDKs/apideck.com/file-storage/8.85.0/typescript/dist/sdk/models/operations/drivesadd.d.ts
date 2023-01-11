import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DrivesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DrivesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DrivesAddRequest extends SpeakeasyBase {
    queryParams: DrivesAddQueryParams;
    headers: DrivesAddHeaders;
    request: shared.DriveInput;
    security: DrivesAddSecurity;
}
export declare class DrivesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createDriveResponse?: shared.CreateDriveResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
