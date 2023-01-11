import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DrivesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DrivesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DrivesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DrivesUpdateRequest extends SpeakeasyBase {
    pathParams: DrivesUpdatePathParams;
    queryParams: DrivesUpdateQueryParams;
    headers: DrivesUpdateHeaders;
    request: shared.DriveInput;
    security: DrivesUpdateSecurity;
}
export declare class DrivesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateDriveResponse?: shared.UpdateDriveResponse;
}
