import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.DrivesFilter;
    limit?: number;
    raw?: boolean;
}
export declare class DrivesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DrivesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DrivesAllRequest extends SpeakeasyBase {
    queryParams: DrivesAllQueryParams;
    headers: DrivesAllHeaders;
    security: DrivesAllSecurity;
}
export declare class DrivesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDrivesResponse?: shared.GetDrivesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
