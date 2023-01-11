import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DrivesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DrivesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DrivesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DrivesOneRequest extends SpeakeasyBase {
    pathParams: DrivesOnePathParams;
    queryParams: DrivesOneQueryParams;
    headers: DrivesOneHeaders;
    security: DrivesOneSecurity;
}
export declare class DrivesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDriveResponse?: shared.GetDriveResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
