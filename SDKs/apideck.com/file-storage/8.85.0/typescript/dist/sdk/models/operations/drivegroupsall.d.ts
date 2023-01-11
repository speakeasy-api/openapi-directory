import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveGroupsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.DriveGroupsFilter;
    limit?: number;
    raw?: boolean;
}
export declare class DriveGroupsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DriveGroupsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DriveGroupsAllRequest extends SpeakeasyBase {
    queryParams: DriveGroupsAllQueryParams;
    headers: DriveGroupsAllHeaders;
    security: DriveGroupsAllSecurity;
}
export declare class DriveGroupsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDriveGroupsResponse?: shared.GetDriveGroupsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
