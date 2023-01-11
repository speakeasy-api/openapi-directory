import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveGroupsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DriveGroupsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DriveGroupsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DriveGroupsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DriveGroupsOneRequest extends SpeakeasyBase {
    pathParams: DriveGroupsOnePathParams;
    queryParams: DriveGroupsOneQueryParams;
    headers: DriveGroupsOneHeaders;
    security: DriveGroupsOneSecurity;
}
export declare class DriveGroupsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDriveGroupResponse?: shared.GetDriveGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
